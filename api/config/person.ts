import type { CustomCharacter } from '../src/content/types'

import { getDateInt } from '../src/utils/dateint'

export const person: CustomCharacter = {
  name: 'Alice',
  type: 'Person',
  image: '/public/person/person.svg',
  revocationInfo: [
    {
      credentialName: 'Person',
      credentialIcon: '/public/person/icon-person.svg',
      title: 'Revoke your Person Credential',
      description:
        'Best myGovNL allows you to revoke your Person Credential "if":\n• there is a problem with your credential.\n• your device was lost or stolen and you want to secure your personal information.',
    },
  ],
  progressBar: [
    {
      name: 'person',
      onboardingStep: 'PICK_CHARACTER',
      iconLight: '/public/common/icon-person-light.svg',
      iconDark: '/public/common/icon-person-dark.svg',
    },
    {
      name: 'moon',
      onboardingStep: 'SETUP_START',
      iconLight: '/public/common/icon-moon-light.svg',
      iconDark: '/public/common/icon-moon-dark.svg',
    },
    {
      name: 'wallet',
      onboardingStep: 'CHOOSE_WALLET',
      iconLight: '/public/common/icon-wallet-light.svg',
      iconDark: '/public/common/icon-wallet-dark.svg',
    },
    {
      name: 'notification',
      onboardingStep: 'ACCEPT_CREDENTIAL',
      iconLight: '/public/common/icon-notification-light.svg',
      iconDark: '/public/common/icon-notification-dark.svg',
    },
    {
      name: 'balloon',
      onboardingStep: 'SETUP_COMPLETED',
      iconLight: '/public/common/icon-balloon-light.svg',
      iconDark: '/public/common/icon-balloon-dark.svg',
    },
  ],
  onboarding: [
    {
      screenId: 'PICK_CHARACTER',
      title: 'Meet Alice',
      text: "Introducing Alice (that's you in this demo!). Alice is a resident of Newfoundland & Labrador. To make her life more convenient, the Provincial Government is planning to provide Alice with a digital Personal Credential to be stored in her NL Wallet.",
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: "NL Wallet is a newly developed app designed for the convenient storage and usage of various credentials on your smartphone. These credentials may include IDs, licenses, and certifications. Using NL Wallet is a straightforward and speedy process. It's important to note that in the future, you'll be able to utilize it both online and in-person. With NL Wallet, you have control over approving every use, ensuring that you only share the information required. In this demo, you'll be using a credential to verify your age meets a certain requirement.",
      image: '/public/common/get-started.svg',
    },
    {
      screenId: 'CHOOSE_WALLET',
      title: 'Install NL Wallet',
      text: 'To get started, please install the NL Wallet app on your smartphone. You can find detailed instructions and the next steps by selecting the button below.',
      image: '/public/common/app-store-screenshots.png',
    },
    {
      screenId: 'CONNECT',
      title: 'Connect with MyGovNL',
      text: 'Picture yourself as Alice, logged into the MyGovNL website. They want to offer you a Digital Person Credential. Simply utilize your NL Wallet to scan the QR code displayed on the website.',
      image: '/public/person/connect.svg',
      issuer_name: 'MyGovNL',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your Credential',
      text: "Your wallet has established a secure and private connection with MyGovNL. In your NL Wallet, you should now find an offer for a Person Credential. Please take a moment to review the details of the offer, and when you're ready, select 'Accept Offer.'",
      image: '/public/common/accept-credential.svg',
      credentials: [
        {
          name: 'Person',
          version: '1.0',
          icon: '/public/person/credential-icon.svg',
          attributes: [
            {
              name: 'given_names',
              value: 'Alice',
            },
            {
              name: 'family_name',
              value: 'Smith',
            },
            {
              name: 'street_address',
              value: '555 Ocean Front Rd.',
            },
            {
              name: 'locality',
              value: 'Labrador City',
            },
            {
              name: 'region',
              value: 'Newfoundland & Labrador',
            },
            {
              name: 'postal_code',
              value: 'A2V 1Y3',
            },
            {
              name: 'country',
              value: 'Canada',
            },
            {
              name: 'birthdate_dateint',
              value: `${getDateInt(-24)}`,
            },
            {
              name: 'expiry_date_dateint',
              value: `${getDateInt(4)}`,
            },
            {
              name: 'picture',
              value:
                'data:image/png;base64,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',
            },
          ],
        },
      ],
    },
    {
      screenId: 'SETUP_COMPLETED',
      title: "You're all set!",
      text: "Congratulations on receiving your first set of digital credentials! They are now securely stored in your wallet, ready to be put to use. So, what are you waiting for? Let's get started!",
      image: '/public/common/onboarding-completed-light.svg',
    },
  ],
  useCases: [
    {
      id: 'bellIslandOnline',
      name: 'Bell Island Beer & Wine',
      screens: [
        {
          screenId: 'START',
          title: 'Getting started in the store',
          text: "Meet Alice (that's you in this demo!) who can utilize her Person Credential at a liquor distribution store. In this example, you will simply inform Bell Island Beer & Wine that you are over 19 years old, without disclosing your birth date or exact age.",
          image: '/public/person/scenarios/store/card-id.svg',
        },
        {
          screenId: 'CONNECTION',
          title: "Start proving you're of age",
          text: "Picture yourself as Alice, in the checkout process at Bell Island Beer & Wine. After a long day at work, you're looking forward to picking up a bottle of wine for dinner, but there's a requirement to prove you're over 19 years old. To begin, simply scan the QR code shown below.",
          image: '/public/person/scenarios/store/cart-no-overlay.png',
          verifier: { name: 'Bell Island Beer & Wine', icon: '/public/person/scenarios/store/store-logo.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "Now, NL Wallet will prompt you to confirm what information to share. Please take note that it will only convey that you are of a certain age; your birthdate and exact age will remain confidential. Rest assured, you don't need to share any additional details for it to be deemed trustworthy.",
          requestOptions: {
            title: 'Bell Island Beer & Wine Request',
            text: 'Bell Island Beer & Wine requires some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/person/scenarios/store/icon-card.png',
                name: 'Person',
                predicates: {
                  name: 'birthdate_dateint',
                  type: '<=',
                  value: getDateInt(-19),
                },
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: 'By demonstrating that you meet the required age criteria, Bell Island Beer & Wine has successfully provided you with the bottle of wine. This process was quick, involved minimal information disclosure, and allowed Bell Island Beer & Wine to establish trust effortlessly and automatically based on the information you provided.',
          image: '/public/person/scenarios/store/success.svg',
        },
      ],
    },
  ],
}
