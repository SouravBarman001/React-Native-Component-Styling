import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View, ScrollView } from 'react-native';
import FlatList from './components/FlatList';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
       <FlatList/>
       <ElevatedCards/>
       <FancyCard/>
       <FancyCard/>
       <ContactList/>
       <ActionCard/>
      </ScrollView>
      
    </SafeAreaView>
  );
}


