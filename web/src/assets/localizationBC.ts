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
      },
    },
    // /digital-trust/showcase/demo
    onboarding: {
      title: 'Get Started | BC Wallet Self-Sovereign Identity Demo',
      walletModal: {
        downloadBCWallet: '1. Download BC Wallet on your phone',
        searchBCWallet: `. You can also search for BC Wallet in your phone's apps store.`,
        URL: {
          // Could be more specific, kept consistent with Asset names used.
          appStore: 'https://apps.apple.com/us/app/bc-wallet/id1587380443',
          playStore: 'https://play.google.com/store/apps/details?id=ca.bc.gov.BCWallet',
        },
      },
    },
    useCase: {
      title: ' | BC Wallet Self-Sovereign Identity Demo',
    },
    dashboard: {
      title: 'Dashboard | BC Wallet Self-Sovereign Identity Demo',
      errorTitle: 'Woops...',
      errorDescription: "That's not gone well. Please restart the demo.",
      components: {
        demoCompletedModal: {
          title: 'Showcase Completed!',
          description: 'Looking to leave some feedback? Take our survey and connect with us!',
        },
      },
    },
  },
  footer: {
    mailTo: 'ditrust@gov.bc.ca',
    copyright: 'Copyright © 2022 Government of British Columbia',
  },
}
