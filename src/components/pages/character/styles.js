import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: undefined,
    resizeMode: 'cover',
  },
  row: {flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20},
  label: {fontSize: 18},
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
  edit: {
    marginVertical: 40,
  },
});

export default styles;
