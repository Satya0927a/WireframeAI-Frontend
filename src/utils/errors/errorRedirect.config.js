export const errorRedirectHandler = (redirectTo) => {
  switch (redirectTo) {
    case "LOGIN":
      return "/login"

    default:
      break;
  }
}
