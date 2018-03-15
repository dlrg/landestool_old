<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Timetable</h1>
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-clock-2"></i> Anwesenheit an den Tagen
                            <button class="btn btn-sm btn-info c-white float-right" @click="edit">Bearbeiten</button>
                        </div>
                        <div class="card-body">
                           <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Tag</th>
                                    <th>von</th>
                                    <th>bis</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                  <td>{{ user.time.day }}</td>
                                  <td>{{ user.time.start }}</td>
                                  <td>{{ user.time.end }}</td>
                                  <td><!--<button class="btn btn-sm btn-danger float-right" @click.stop="remove()">Löschen</button>--></td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import getUserFromRoute from '@/mixins/getUserFromRoute'
  export default {
    mixins: [getUserFromRoute],
    methods: {
      edit () {
        this.$router.push('/admin/users/' + this.$route.params.userId + '/timetableEdit')
      }
    },
    async fetch ({ store, params }) {
      await store.dispatch('user/get', params.userId)
    }
  }
</script>
