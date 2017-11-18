<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-12">
                    <h1>Programm</h1>
                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Alle Programmpunkte
                        </div>
                        <div class="card-body">

                        </div>
                    </div>
                    <pre>
                        {{program}}
                    </pre>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    async asyncData ({params}) {
      console.log(params)
      let { data } = await axios.get('/api/program/' + params.programId)
      return { program: data }
    }
  }
</script>
