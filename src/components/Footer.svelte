<script>
  // Importing required components and icons
  import Icon from "svelte-icons-pack/Icon.svelte";
  import BsGithub from "svelte-icons-pack/bs/BsGithub";

  import {
    FOOTER_COPYRIGHT,
    FOOTER_TEXT,
    FOOTER_TITLE,
  } from "../constants/index.js";
</script>

<div class="footer">
  <div class="footer-main">
    <div class="footer-text">
      <h3>{FOOTER_TITLE}</h3>
      <p>
        {FOOTER_TEXT}
      </p>
    </div>
    <div class="footer-github">
      <a
        href="https://github.com/Alan-Senderovich"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={BsGithub} size="23" />
      </a>
    </div>
  </div>
  <span>{FOOTER_COPYRIGHT}</span>
</div>

<style>
  /* Footer container */
  .footer {
    background-color: #1f2937;
    padding: 1.5rem 3rem 2.5rem;
    text-align: center;
  }

  /* Main content within the footer */
  .footer-main {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  /* Heading within the footer */
  .footer h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  /* Text within the footer */
  .footer p {
    font-size: 0.875rem;
    color: #9b9a9a;
    margin: 0 0 2.5rem 0;
    line-height: 1.4;
  }

  /* GitHub link within the footer */
  .footer-github {
    margin-top: 2.3rem;
  }

  .footer-github a {
    color: #959595;
  }

  .footer-github a:hover {
    background-color: initial;
    color: white;
  }

  /* Copyright text within the footer */
  .footer span {
    color: #9b9a9a;
    margin-bottom: 1rem;
  }

  /* Responsive styles for smaller screens */
  @media (max-width: 768px) {
    .footer {
      padding: 1.5rem 1.4rem 2.5rem;
    }

    .footer-main {
      flex-direction: column;
    }

    .footer p {
      margin: 0;
    }

    .footer-github {
      margin-bottom: 1rem;
    }
  }
</style>
