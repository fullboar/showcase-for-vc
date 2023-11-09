export const localizationBC = {
  // /digital-trust/showcase
  pages: {
    landingPage: {
      title: 'BC Wallet Showcase',
      description: "Explore how you can use BC Wallet to prove things about yourself, in a way that's safe and secure.",
      //!! Should we change /pages/landing/MainSection line 78 to the below URL, or leave the URL defined.
      digitalTrustURL: 'https://digital.gov.bc.ca/digital-trust/',
      // Buttons are optional, added for French translation potential.
      buttons: {
        getStarted: 'Get started',
        getToKnowUs: 'Get to know us',
        tryDemo: 'Try Demo ',
      },
    },
    // /digital-trust/showcase/demo
    onboarding: {
      title: 'Get Started | BC Wallet Self-Sovereign Identity Demo',
      components: {
        walletModal: {
          downloadBCWallet: '1. Download BC Wallet on your phone',
          toDownload: 'To download, ',
          searchBCWallet: `. You can also search for BC Wallet in your phone's apps store.`,
          step2: '2. Complete the setup',
          haveMyWallet: 'I HAVE MY WALLET',
          completeOnboarding: 'Complete the onboarding process in the app.',
          selectAppStore: 'select the apps store icon below',
          scanThisQR: 'scan this QR code with your phone or select the apps store icon below',
          URL: {
            // Could be more specific, kept consistent with Asset names used.
            appStore: 'https://apps.apple.com/us/app/bc-wallet/id1587380443',
            playStore: 'https://play.google.com/store/apps/details?id=ca.bc.gov.BCWallet',
          },
        },
        characterContent: {
          selectYourCharacter: 'SELECT YOUR CHARACTER',
        },
        failedRequestModal: {
          modalTitle: "That's not what we expected.",
          tryClosingWallet: 'Try closing the wallet on your phone and opening it again. If the problem continues, ',
          sendAnother: 'send another ',
          proofTrue: 'send another proof request.',
          proofFalse: 'send another credential.',
        },
        walletItem: {
          use: 'USE',
          by: 'by ',
        },
      },
    },
    useCase: {
      title: ' | BC Wallet Self-Sovereign Identity Demo',
      components: {
        connectionCard: {
          youreInteractingWith: "You're interacting with",
        },
        endContainer: {
          buttons: {
            complete: 'COMPLETE',
          },
        },
        proofAttributesCard: {
          wouldLikeToKnow: ' would like to know:',
        },
        proofCard: {
          youllNeedToPresent: "You'll need to present",
        },
        starterInfo: {
          youllNeedToPresent: "You'll need to present",
          youreConnectingWith: "You're connecting with",
          youllReceive: "You'll receive",
        },
        stepperCard: {
          followThisPath: 'Follow this path',
        },
      },
      steps: {
        stepConnection: {
          scanQRCode: 'Scan the QR-code with your digital wallet ',
          or: 'or ',
          openInYourWallet: 'open in your wallet',
          toProveThings: 'to prove things about yourself',
          successContinue: 'Success! You can continue.',
        },
        stepProofOOB: {
          scanOOBQR: 'Scan the OOB QR-code with your ',
          wallet: 'wallet ',
          or: 'or',
          openInWallet: 'open in wallet',
          successContinue: 'Success! You can continue.',
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
          URL: {
            submitDigitalGovBC:
              'https://submit.digital.gov.bc.ca/app/form/submit?f=d61da710-acc3-46fc-b692-111cf6e348de',
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
          revokingYourCred: 'Revoking your dredentials',
          ensuringTheSafety: 'Ensure the safety of your personal information if your device is lost or stolen.',
        },
        revocationItem: {
          revoke: 'REVOKE',
        },
        startButton: {
          haventUnlocked: "You haven't unlocked the required credentials yet.",
        },
        useCaseContainer: {
          usingYourCredentials: 'Using your credentials',
        },
        useCaseItem: {
          start: 'START',
        },
      },
    },
  },
  footer: {
    mailTo: 'ditrust@gov.bc.ca',
    copyright: 'Copyright © 2022 Government of British Columbia',
  },
}
