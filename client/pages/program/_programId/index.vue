<template>
    <section class="container-fluid">
        <div class="animated fadeIn">
            <h1>Programm</h1>
            <div class="row">
                <div class="col-6">

                    <div class="card">
                        <div class="card-header">
                            <i class="ca ca-anchor"></i> Alle Programmpunkte
                        </div>
                        <div class="card-body">
                            <div class="row">

                                <div class="col-sm-12">
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label" for="text-input">Text Input</label>
                                        <div class="col-md-9">
                                            <input type="text" id="text-input" name="text-input" class="form-control" placeholder="Text">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <pre>
                                {{program}}
                            </pre>
                        </div>
                    </div>
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
