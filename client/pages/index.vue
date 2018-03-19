<template>
  <section class="container-fluid">
    <h1>Dashboard</h1>
    <div class="row">
      <div class="col-lg-6">
        <p>
          Hallo {{ $store.state.auth.user.firstname }} {{ $store.state.auth.user.lastname }} du coole Socke!
        </p>
      </div>
    </div>
  </section>
</template>
