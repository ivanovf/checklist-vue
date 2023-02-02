<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume>
        <template #action>
            <Action/>
        </template>
      </Resume>
    </template>
    <template #reservations>
      <Reservations></Reservations>
    </template>
  </Layout>
</template>
<script>
import Action from "@/components/Action";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Resume from "@/components/Resume/Index";
import Reservations from "@/components/Reservations/Index";

export default {
  name: 'App',
  components: {
    Action,
    Layout,
    Header,
    Resume,
    Reservations
}
}
</script>