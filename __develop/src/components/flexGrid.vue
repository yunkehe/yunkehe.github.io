<template>
    <div class="HolyGrail">
        <header>...</header>
            <div class="HolyGrail-body">
                <main class="HolyGrail-content"> main </main>
                <nav class="HolyGrail-nav"> nav </nav>
                <aside class="HolyGrail-ads"> aside </aside>
            </div>
        <footer>...</footer>
    </div>
</template>
<script>

export default {
    name: 'flexGrid'
}
</script>
<style lang="stylus" scoped>
    body,
    *{
        margin: 0;
        padding: 0;
    }
    .HolyGrail{
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    header, 
    footer{
        flex: 0 0 100px;
    }
    header{
        background-color: blue;
    }
    footer{
        background-color: green;
    }
    .HolyGrail-body {
      display: flex;
      flex: 1;
    }
    .HolyGrail-content{
        flex: 1;
        background-color: #f1f1f1;
    }
    .HolyGrail-nav,
    .HolyGrail-ads{
        flex: 0 0 12em;
    }
    .HolyGrail-nav{
        order: -1;
    }
    @media (max-width: 768px) {
      .HolyGrail-body {
        flex-direction: column;
        flex: 1;
      }
      .HolyGrail-nav,
      .HolyGrail-ads,
      .HolyGrail-content {
        flex: auto;
      }
    }
</style>