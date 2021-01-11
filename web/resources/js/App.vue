<template>
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <div class="container">
                <RouterView />
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
    import Footer from "./components/Footer";
    import Navbar from "./components/Navbar";
    export default {
        components: {
            Navbar, Footer
        }
    }
</script>
