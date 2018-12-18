class UblogVerifier:

    ownedAccount = 'melon';
    valAccount = 'TheEllenShow';

    def verifyUserOwnership(self,twitterID):

        if(twitterID == self.ownedAccount):
            return True;

        return False;

    def verify1000(self,twitterID):

        if(twitterID == self.valAccount):
            return True;

        else:
            return False;

    def verifyViaAPI(twitterID):
        return False;
