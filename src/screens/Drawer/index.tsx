import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation  } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Avatar, Drawer, Title, Caption, TouchableRipple, Switch, Text, useTheme } from 'react-native-paper';

import { Container, DrawerContentSection, UserInfoSection } from './styles';

import { useAuth } from '../../contexts/auth';

import { useTheme as useThemeContext } from '../../contexts/theme';

const DrawerContent: React.FC = (props) => {
  const paperTheme = useTheme();
  const navigation = useNavigation();

  const { singOut, user } = useAuth();
  const { toogleTheme } = useThemeContext();

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <DrawerContentSection>
          <UserInfoSection style={{ flexDirection: 'row', marginTop: 10, marginLeft: 12 }}>
            <View style={{ marginTop: 5 }}>
              <Avatar.Image
                source={{
                  uri: 'https://avatars0.githubusercontent.com/u/13907472'
                }}
                size={50}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Title>{user?.username}</Title>
              <Caption>@gilmazin</Caption>
            </View>
          </UserInfoSection>
          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => { navigation.navigate('home') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Repositories"
              onPress={() => { navigation.navigate('repositories') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => { navigation.navigate('profile') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => { }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => { }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => { toogleTheme() }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 17 }}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </DrawerContentSection>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.BottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={singOut}
        />
      </Drawer.Section>
    </Container>
  )
}

const styles = StyleSheet.create({
  BottomDrawerSection: {
    marginBottom: 15,
  }
})

export default DrawerContent;