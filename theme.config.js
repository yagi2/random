const YEAR = new Date().getFullYear();

export default {
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      <abbr
        title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
        style={{ cursor: "help" }}
      >
        CC BY-NC 4.0
      </abbr>{" "}
      <time>{YEAR}</time> © Itsuki Aoyagi.
    </small>
  ),
};