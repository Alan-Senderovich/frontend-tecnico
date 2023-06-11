<script>
  import TodoContainer from "./components/Todo/TodoContainer.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<main>
  <div class="main-inside">
    <!-- Navbar Component -->
    <Navbar />

    <div class="content">
      <!-- TodoContainer Component -->
      <TodoContainer />
    </div>
  </div>

  <!-- Footer Component -->
  <Footer />
</main>

<style>
  .main-inside {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }

  .content {
    max-width: 510px;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    place-content: center;
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
      padding: 0;
      margin: 0 auto;
    }
  }
</style>
