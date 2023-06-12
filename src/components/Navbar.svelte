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
        width="24px"
        alt="user-icon"
      />
    </button>
    <div class="btn-right">
      <button>
        <div class="icon-container">
          <Icon src={HiOutlineChevronLeft} color="red" size="24" className="custom-icon" title="Custom icon params" />
        </div>
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
    padding: 0.5rem 3.5rem;
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
    padding: 2px 4px 0px 2px;
    background-color: #374151;
    color: white;
  }

  /* Right-aligned button styles */
  .btn-right {
    color: white;
  }

  .icon-container {
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
