type CategoryTooltipType = {
  Contributor: string;
  Governance: string;
  Outreach: string;
  Security: string;
  Utilization: string;
};

export interface TooltipProps {
  category: keyof CategoryTooltipType;
}

export enum CATEGORIES {
  Contributor = 'Contributor',
  Governance = 'Governance',
  Outreach = 'Outreach',
  Security = 'Security',
  Utilization = 'Utilization',
}

export const CATEGORY_TOOLTIP: CategoryTooltipType = {
  Contributor:
    'Measure of user contribution to community development. Including payment from treasury, holding contributor POAPs…',
  Governance:
    'Measure of user participation in community governance. Including voting, submitting proposals…',
  Outreach:
    'Measure of user efforts to promote the community. Including donations to public goods, participation in Regen project governance…',
  Security:
    ' Measure of user contribution to network security. Including holding tokens, providing liquidity…',
  Utilization:
    'Measure of user activity on the network. Including transactions, contract interactions and deployment…',
};

export const SOURCES = {
  Mainnet: {
    name: 'Ethereum Mainnet',
    logo: '/icons/logos/eth.svg',
  },
  Optimism: {
    name: 'Optimism Mainnet',
    logo: '/icons/logos/op.svg',
  },
  Giveth: {
    name: 'Giveth',
    logo: '/icons/logos/giv.svg',
  },
  Gitcoin: {
    name: 'Gitcoin',
    logo: '/icons/logos/gtc.svg',
  },
  Safe: {
    name: 'Gnosis Safe',
    logo: '/icons/logos/eth.svg',
  },
};
