<template>
    <section class="container-fluid">
    <!-- Breadcrumb -->
        <ol class="breadcrumb">
            <li class="breadcrumb-item">Home</li>
            <li class="breadcrumb-item"><router-link :to="'/'">Dashboard</router-link></li>
            <li class="breadcrumb-item active">2018</li>
        </ol>
    </section>
</template>

<script>
export default {
  name: 'layout-breadcrumb'
}
</script>
