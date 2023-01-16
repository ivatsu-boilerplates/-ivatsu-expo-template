import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppContainer } from '../../components/shared'
import styles from './homeScreenStyles'

const HomeScreen: React.FunctionComponent = () => {
  const insets = useSafeAreaInsets()

  return (
    <AppContainer withStatusBar>
      <View
        style={
          // Paddings to handle safe area
          {
            paddingTop: insets.top,
          }
        }
      >
        <Text style={styles.headingText}>Home Screen</Text>
      </View>
    </AppContainer>
  )
}

export default HomeScreen
