import TonWeb from 'tonweb';
const providerUrl = 'https://testnet.toncenter.com/api/v2/jsonRPC'; // URL for the TON testnet
const apiKey = '77332745ff3c72f390dd774668debb0d444a25ec6dbe65fc4c6d10f105d4c644'; // Replace with your TON testnet API key, if required
const tonweb = new TonWeb(new TonWeb.HttpProvider(providerUrl, { apiKey }));
export const getWalletBalance = async (address: string): Promise<string | null> => {
    try {
      const balance = await tonweb.getBalance(address);
      // Convert from nanotons to tons
      return TonWeb.utils.fromNano(balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
      return null;
    }
  };