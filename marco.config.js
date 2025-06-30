module.exports = {
    android: {
      packageName: 'com.rntabsbenchmarks',
      outputPath: './reports/android/oneplus/',
      dataDir: [
        {
          path: 'reports/android/oneplus/js-tab-load.json',
          reportName: 'Android HighEnd JS Tab Load',
        },
        {
          path: 'reports/android/oneplus/native-tab-load.json',
          reportName: 'Android HighEnd Native Tab Load',
        },
        {
          path: 'reports/android/oneplus/js-tab-switch.json',
          reportName: 'Android HighEnd JS Tab Switch',
        },
        {
          path: 'reports/android/oneplus/native-tab-switch.json',
          reportName: 'Android HighEnd Native Tab Switch',
        },
        {
          path: 'reports/android/vivo/js-tab-load.json',
          reportName: 'Android LowEnd JS Tab Load',
        },
        {
          path: 'reports/android/vivo/native-tab-load.json',
          reportName: 'Android LowEnd Native Tab Load',
        },
        {
          path: 'reports/android/vivo/js-tab-switch.json',
          reportName: 'Android LowEnd JS Tab Switch',
        },
        {
          path: 'reports/android/vivo/native-tab-switch.json',
          reportName: 'Android LowEnd Native Tab Switch',
        },
        {
          path: 'reports/ios/js-tab-load.json',
          reportName: 'iOS JS Tab Load',
        },
        {
          path: 'reports/ios/native-tab-load.json',
          reportName: 'iOS Native Tab Load',
        },
        
        {
          path: 'reports/ios/js-tab-switch.json',
          reportName: 'iOS JS Tab Switch',
        },
        {
          path: 'reports/ios/native-tab-switch.json',
          reportName: 'iOS Native Tab Switch',
        },
      ],
      port: '8080',
    },
    ios: {
      packageName: 'org.reactjs.native.example.RNTabsBenchmarks',
      outputPath: './reports/ios',
      dataDir: 'reports/ios/log.json',
      port: '8080',
    },
  };
