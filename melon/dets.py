
import tweetpony
import json
import os


def authenticate():
	try:
		api = tweetpony.API(tweetpony.CONSUMER_KEY, tweetpony.CONSUMER_SECRET)
		url = api.get_auth_url()
		print("Visit this URL to obtain your verification code: %s" % url)
		verifier = raw_input("Input your code: ")
		api.authenticate(verifier)
	except tweetpony.APIError as err:
		print ("Oh no! You could not be authenticated. Twitter returned error #%i and said: %s" % (err.code, err.description))
	else:
		auth_data = {'access_token': api.access_token, 'access_token_secret': api.access_token_secret}
		with open(os.path.join(os.path.dirname(os.path.realpath(__file__)), ".auth_data.json"), 'w') as f:
			f.write(json.dumps(auth_data))
		print("Hello, @%s! You have been authenticated. You can now run the other example scripts without having to authenticate every time." % api.user.screen_name) 

def get_api():
	if not os.path.exists(os.path.join(os.path.dirname(os.path.realpath(__file__)), ".auth_data.json")):
		authenticate()
	with open(os.path.join(os.path.dirname(os.path.realpath(__file__)), ".auth_data.json"), 'r') as f:
		auth_data = json.loads(f.read())
	try:
		api = tweetpony.API(tweetpony.CONSUMER_KEY, tweetpony.CONSUMER_SECRET, auth_data['access_token'], auth_data['access_token_secret'])
	except tweetpony.APIError as err:
		print("Oh no! You could not be authenticated. Twitter returned error #%i and said: %s" % (err.code, err.description))
	else:
		return api
	return False

def main():
	api = get_api()
	if not api:
		return
	username = raw_input("Username to lookup (leave blank for your own): ").strip()
	if username == "":
		username = api.user.screen_name
	try:
		user = api.get_user(screen_name = username)
	except tweetpony.APIError as err:
		print("Oh no! The user's profile could not be loaded.")
	else:
		for key, value in user.iteritems():
			if key in ['entities', 'json', 'status']:
				continue
			line = "%s " % key.replace("_", " ").capitalize()
			line += "." * (50 - len(line)) + " "
			line += unicode(value)
			print(line)

if __name__ == "__main__":
	main()
