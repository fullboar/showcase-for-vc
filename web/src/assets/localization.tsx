export const localization = {
  pages: {
    landingPage: {
      title: 'BC Wallet Showcase',
      description: "Explore how you can use BC Wallet to prove things about yourself, in a way that's safe and secure.",
      URL: {
        digitalTrust: 'https://digital.gov.bc.ca/digital-trust/',
      },
      buttons: {
        getStarted: 'Get started',
        getToKnowUs: 'Get to know us',
        tryDemo: 'Try Demo ',
      },
    },
    onboarding: {
      title: 'Get Started | BC Wallet Self-Sovereign Identity Demo',
      components: {
        walletModal: {
          step1: '1. Download BC Wallet on your phone',
          toDownload: 'To download, ',
          searchGovWallet: `. You can also search for BC Wallet in your phone's apps store.`,
          step2() {
            return (
              <div>
                <p className="font-semibold">{'2. Complete the setup'}</p>
                <p className="mt-5">{'Complete the onboarding process in the app.'}</p>
              </div>)
          },
          haveMyWallet: 'I HAVE MY WALLET',
          selectAppStore: 'select the apps store icon below',
          scanThisQR: 'scan this QR code with your phone or select the apps store icon below',
          isMobile(isMobile: boolean) {
            let mobileStr: string = isMobile ? this.selectAppStore : this.scanThisQR
            return (this.toDownload + mobileStr + this.searchGovWallet)
          },
          URL: {
            appStore: 'https://apps.apple.com/us/app/bc-wallet/id1587380443',
            playStore: 'https://play.google.com/store/apps/details?id=ca.bc.gov.BCWallet',
          },
        },
        characterContent: {
          select: 'SELECT YOUR CHARACTER',
        },
        failedRequestModal: {
          modalTitle: "That's not what we expected.",
          tryClosingWallet: 'Try closing the wallet on your phone and opening it again. If the problem continues, ',
          proofTrue: 'send another proof request.',
          proofFalse: 'send another credential.',
          button: {
            OK: 'OK',
          },
        },
        starterCredentials: {
          title: 'Starter credentials',
        },
        walletItem: {
          use: 'USE',
          by: 'by ',
        },
      },
      steps: {
        acceptCredential: {
          errorMsg: {
            requestFailedWithErr: 'The request has failed with the following error: ',
            wereSorryRestart:
              ". We're sorry, but you're going to have to restart. If this issue persists, please contact us. ",
            requestTimedOut:
              "The request timed out. We're sorry, but you're going to have to restart the demo. If this issue persists, please contact us.",
          },
        },
        pickCharacter: {
          defaultTitle: 'Who do you want to be today?',
          defaultText:
            "It's time to pick your character. Every character has its own set of use cases, which explore the power of digital credentials. Don't worry, you can change your character later.",
        },
        setupCompleted: {
          listDisc: {
            0: 'You control when you use your credentials',
            1: 'You can share all or parts of your credentials',
            2: 'No one else is told when you use them',
            3: 'The information on your credentials is always shared over a secure connection',
            4: 'Anyone who receives information from your credentials can trust its legitimacy',
          },
          wereDoneWithStep: "We're done with this step. Next, we'll explore ways you can use your credentials.",
        },
        setupConnection: {
          scanQRCode: 'Scan the QR-code with your ',
          wallet: 'wallet',
          or: 'or',
          openInWallet: 'open in wallet',
          alreadyHaveCredential: 'I Already Have my Credential',
          success: 'Success! You can continue.',
          scanQRCodeDigitalWallet: 'Scan the QR-code with your digital wallet ',
        },
      },
      onboardingContainer: {
        leaveModalTitle: 'Are you sure you want to leave?',
        leaveModalDescription: "You're progress will be lost and you'll be redirected to the homepage.",
      },
    },
    useCase: {
      title: ' | BC Wallet Self-Sovereign Identity Demo',
      components: {
        connectionCard: {
          title: "You're interacting with",
        },
        endContainer: {
          buttons: {
            complete: 'COMPLETE',
          },
        },
        proofAttributesCard: {
          requestInfo: ' would like to know:',
        },
        proofCard: {
          title: "You'll need to present",
        },
        starterInfo: {
          reqCredentialsTitle: "You'll need to present",
          entityTitle: "You're connecting with",
          issueCredTitle: "You'll receive",
        },
        stepperCard: {
          title: 'Follow this path',
        },
      },
      steps: {
        stepConnection: {
          scanQRCode: 'Scan the QR-code with your digital wallet ',
          or: 'or ',
          openInYourWallet: 'open in your wallet',
          toProveThings: 'to prove things about yourself',
          success: 'Success! You can continue.',
        },
        stepProofOOB: {
          scanOOBQR: 'Scan the OOB QR-code with your ',
          wallet: 'wallet ',
          or: 'or',
          openInWallet: 'open in wallet',
          success: 'Success! You can continue.',
        },
      },
      section: {
        leaveModalTitle: 'Are you sure you want to leave?',
        leaveModalDescription: "You'll be redirected to the dashboard.",
        button: {
          complete: 'COMPLETE',
          next: 'NEXT',
        },
      },
      useCasePage: {
        errorTitle: 'Woops...',
        errorDescription: "You haven't picked your character yet. Please restart the demo.",
      },
    },
    dashboard: {
      title: 'Dashboard | BC Wallet Self-Sovereign Identity Demo',
      errorTitle: 'Woops...',
      errorDescription: "That's not gone well. Please restart the demo.",
      components: {
        demoCompletedModal: {
          title: 'Showcase Completed!',
          description: 'Looking to leave some feedback? Take our survey and connect with us!',
          giveFeedback: 'Give feedback',
          basedOnCodeBy: 'Based on code by ',
          animoName: 'Animo',
          businessIllustrations: 'Business illustrations by ',
          storyset: 'Storyset',
          iconsMade: 'Icons made by ',
          freepik: 'Freepik',
          from: ' from ',
          flaticonCom: 'Flaticon.com',
          flaticon: 'Flaticon',
          button: {
            finish: 'FINISH',
            cancel: 'CANCEL',
          },
          URL: {
            submitFeedback: 'https://submit.digital.gov.bc.ca/app/form/submit?f=d61da710-acc3-46fc-b692-111cf6e348de',
            animo: 'https://animo.id/',
            storyset: 'https://storyset.com/business',
            freepik: 'https://www.freepik.com',
            flaticon: 'https://www.flaticon.com/',
          },
        },
        profileCard: {
          modalTitle: 'This will reset your dashboard.',
          modalDescription:
            "Your current credentials will become invalid. Please make sure you've completed all the use cases before you do this.",
          leave: 'LEAVE',
        },
        revocationContainer: {
          revoke: 'Revoking your dredentials',
          description: 'Ensure the safety of your personal information if your device is lost or stolen.',
          readLess: 'READ LESS',
          readMore: 'READ MORE',
        },
        revocationItem: {
          revoke: 'REVOKE',
        },
        startButton: {
          disabled: "You haven't unlocked the required credentials yet.",
        },
        useCaseContainer: {
          title: 'Using your credentials',
        },
        useCaseItem: {
          start: 'START',
        },
      },
    },
  },
  components: {
    actionCTA: {
      acceptRequest: 'Accept the request in your ',
      wallet: 'wallet',
      or: 'or',
      openInWallet: 'open in wallet',
      success: 'Success! You can continue.',
      fail: "I didn't receive anything",
    },
    backButton: {
      back: 'BACK',
    },
    customUpload: {
      title: 'Upload custom character',
      upload: 'UPLOAD',
      loading:
        'Adding new schemas and credential defenitions to the ledger. Please be patient, this can take a few minutes.',
    },
    footer: {
      mailTo: 'ditrust@gov.bc.ca',
      copyright: 'Copyright © 2022 Government of British Columbia',
    },
  },
}
