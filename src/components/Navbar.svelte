<script>
  // Importing required components and icons
  import Icon from "svelte-icons-pack/Icon.svelte";
  import HiOutlineChevronLeft from "svelte-icons-pack/hi/HiOutlineChevronLeft";
</script>

<div class="navbar">
  <h2>TaskMaster</h2>
  <div class="btn-group">
    <button>
      <img
        src="https://cdn2.iconfinder.com/data/icons/membership-account-outline/200/coder-512.png"
        width="20px"
        alt="user-icon"
      />
    </button>
    <div class="btn-right">
      <button>
        <Icon src={HiOutlineChevronLeft} size="20" />
      </button>
    </div>
  </div>
</div>

<style>
  /* Navbar container */
  .navbar {
    width: 100%;
    overflow-x: hidden;
    background-color: #1f2937;
    padding: 0.5rem 3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Heading within the navbar */
  .navbar h2 {
    font-size: 18px;
    margin: 0;
  }

  /* Button group within the navbar */
  .navbar .btn-group {
    display: flex;
    gap: 1rem;
  }

  /* Button styles */
  .navbar button {
    border-radius: 50%;
    padding: 5px 7px 2px;
    background-color: #374151;
    color: white;
  }

  /* Right-aligned button styles */
  .btn-right {
    color: white;
  }

  /* Responsive styles for smaller screens */
  @media (max-width: 768px) {
    .navbar {
      width: 100%;
      padding: 0.5rem 1.5rem;
      margin: 0 auto;
    }
  }
</style>
