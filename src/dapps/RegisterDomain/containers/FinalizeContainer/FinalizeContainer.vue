<template>
  <div>
    <div class="finalize-container">
      <h3>{{ $t('dapps.finalizeDesc') }}: {{ domainName }}.eth</h3>
      <button class="finalize-button" @click="finalize">
        {{ $t('dapps.finalize') }}
      </button>
    </div>
    <interface-bottom-text
      :link-text="$t('interface.helpCenter')"
      :question="$t('interface.haveIssues')"
      link="https://xinfin.network"
    />
  </div>
</template>
<script>
import InterfaceBottomText from '@/components/InterfaceBottomText';
export default {
  components: {
    'interface-bottom-text': InterfaceBottomText
  },
  props: {
    domainName: {
      type: String,
      default: ''
    },
    finalize: {
      type: Function,
      default: function() {}
    }
  },
  mounted() {
    if (this.domainName === '') {
      this.$router.push('/interface/dapps/register-domain');
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'FinalizeContainer.scss';
</style>
