import { mapGetters, mapActions, mapMutations } from "vuex";

export const searchMixin = {
  data() {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    onQueryChange(query) {
      this.query = query.trim()
    },

    blurInput() {
      this.$refs.searchBox.blur()
    },

    addQuery(query) {
      this.$refs.searchBox.setQuery(query)
    },

    saveSearch() {
      this.saveSearchHistory(this.query)
    },

    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory'
    ])
  }
}