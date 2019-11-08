import APITokenScopes from "./lib/APITokenScopes";

export default (host, key: string) => {

  return {
    APITokenScopes: APITokenScopes(host, key),
  };
};
