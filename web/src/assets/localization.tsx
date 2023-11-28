export const localization = {
  pages: {
    landingPage: {
      title: 'Digital Credential Showcase',
      description:
        "Explore how you can use Digital Credentials to prove things about yourself, in a way that's safe and secure.",
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
      title: 'Get Started | myGovNL Self-Sovereign Identity Demo',
      components: {
        walletModal: {
          step1: '1. Download myGovNL Wallet on your phone',
          isMobile:
            "To download, select the apps store icon below. You can also search for myGovNL Wallet in your phone's apps store.",
          isNotMobile:
            "To download, scan this QR code with your phone or select the apps store icon below. You can also search for myGovNL Wallet in your phone's apps store.",
          step2: (
            <>
              <p className="font-semibold">{'2. Complete the setup'}</p>
              <p className="mt-5">{'Complete the onboarding process in the app.'}</p>
            </>
          ),
          URL: {
            appStore: 'https://apps.apple.com/us/app/bc-wallet/id1587380443',
            playStore: 'https://play.google.com/store/apps/details?id=ca.bc.gov.BCWallet',
          },
          button: {
            haveMyWallet: 'I HAVE MY WALLET',
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
          isMobile: 'wallet or ',
          isNotMobile: 'wallet',
          scanQRCode: 'Scan the QR-code with your ',
          wallet: 'wallet ',
          or: 'or ',
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
      title: ' | myGovNL Wallet Self-Sovereign Identity Demo',
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
          isMobile: 'Scan the QR-code with your digital wallet or',
          isNotMobile: 'Scan the QR-code with your digital wallet',
          openInYourWallet: 'open in your wallet',
          toProveThings: 'to prove things about yourself',
          success: 'Success! You can continue.',
        },
        stepProofOOB: {
          isMobile: 'wallet or ',
          isNotMobile: 'wallet',
          scanOOBQR: 'Scan the OOB QR-code with your ',
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
      title: 'Dashboard | myGovNL Wallet Self-Sovereign Identity Demo',
      errorTitle: 'Woops...',
      errorDescription: "That's not gone well. Please restart the demo.",
      components: {
        demoCompletedModal: {
          title: 'Showcase Completed!',
          description: 'Looking to leave some feedback? Take our survey and connect with us!',
          giveFeedback: 'Give feedback',
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
            freepik: 'https://www.freepik.com',
            flaticon: 'https://www.flaticon.com/',
          },
          link: {
            animo: (
              <>
                <a href={'https://animo.id/'}>
                  {'Based on code by '}
                  <u>{'Animo'}</u>
                </a>
              </>
            ),
            storyset: (
              <>
                <a href={'https://storyset.com/business'}>
                  {'Business illustrations by '}
                  <u>{'Storyset'}</u>
                </a>
              </>
            ),
            freepikAndFlaticon: (
              <>
                {'Icons made by '}
                <u>
                  <a href={'https://www.freepik.com'} title={'Freepik'}>
                    {'Freepik'}
                  </a>
                </u>
                {' from '}
                <a href={'https://www.flaticon.com/'} title={'https://www.flaticon.com/'}>
                  <u>{'Flaticon.com'}</u>
                </a>
              </>
            ),
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
      isMobile: (
        <>
          <p>
            {'Accept the request in your '}
            <a href="bcwallet://">{'wallet or'}</a>
          </p>
        </>
      ),
      isNotMobile: (
        <>
          <p>
            {'Accept the request in your '}
            <a href="bcwallet://">{'wallet'}</a>
          </p>
        </>
      ),
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
        'Adding new schemas and credential definitions to the ledger. Please be patient, this can take a few minutes.',
    },
    footer: {
      mailTo: 'ditrust@gov.nl.ca',
      copyright: 'Copyright © 2022 Government of Newfoundland & Labrador',
    },
  },
}
