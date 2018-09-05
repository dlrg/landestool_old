<template>
  <section class="container-fluid">
    <h1>Dashboard</h1>
    <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="ca ca-heart-1"></i> Willkommen!
              <div class="card-body">
                  Hallo {{ $store.state.auth.user.firstname }} {{ $store.state.auth.user.lastname }} du coole Socke! <br>
                  Herzlich Willkommen beim Helfer- und Programmtool! <br>
                  Ab sofort kannst du auch Shirts bestellen!
              </div>
            </div>
          </div>
       </div>
    </div>
  </section>
</template>
