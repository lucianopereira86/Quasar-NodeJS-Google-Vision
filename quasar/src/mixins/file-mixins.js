export default {
  methods: {
    bytesToSize (bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes === 0) return '0 Bytes'
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
    },
    getIcon (file) {
      return file ? file.mimeType.includes('image') ? 'insert_photo'
        : file.mimeType.includes('audio') ? 'audiotrack'
          : file.mimeType.includes('video') ? 'play_circle_outline'
            : 'far fa-file' : ''
    }
  }
}
