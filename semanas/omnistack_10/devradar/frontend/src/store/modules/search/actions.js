export function DevRequest(github_username, techs, latitude, longitude) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { github_username, techs, latitude, longitude },
  };
}

export function DevSucess(PARAMS) {
  return {
    type: '@search/SEARCH_SUCCESS',
    payload: { PARAMS },
  };
}
