import 'package:flutter/material.dart';
import 'package:reloassist/screen/BookingPage.dart';
import 'package:reloassist/screen/ProfilePage.dart';
import 'package:reloassist/screen/SupportPage.dart';
import 'package:reloassist/screen/homescreen.dart';

class Navbar extends StatefulWidget {
  const Navbar({super.key});

  @override
  State<Navbar> createState() => _NavbarState();
}

class _NavbarState extends State<Navbar> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    final List<Widget> pages = [
      HomePage(),
      BookingDetailsPage(
        name: "John Doe",
        date: DateTime.now(),
        guests: 2,
        roomType: "Deluxe",
      ),
      SupportPage(),
      ProfilePage()
    ];

    return Scaffold(
      body: IndexedStack(
        index: _selectedIndex,
        children: pages,
      ),
      bottomNavigationBar: Container(
        height: 65,
        decoration: const BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(20),
            topRight: Radius.circular(20),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black12,
              blurRadius: 10,
              spreadRadius: 2,
            ),
          ],
        ),
        child: BottomNavigationBar(
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
          backgroundColor: Colors.transparent,
          elevation: 0,
          items: [
            BottomNavigationBarItem(
              icon: Icon(
                Icons.home,
                color: _selectedIndex == 0 ? Colors.redAccent : Colors.grey,
              ),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.list_alt,
                color: _selectedIndex == 1 ? Colors.redAccent : Colors.grey,
              ),
              label: 'Bookings',
            ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.support_agent,
                color: _selectedIndex == 2 ? Colors.redAccent : Colors.grey,
              ),
              label: 'Support',
            ),
            BottomNavigationBarItem(
              icon: Icon(
                Icons.person,
                color: _selectedIndex == 3 ? Colors.redAccent : Colors.grey,
              ),
              label: 'Profile',
            ),
          ],
          selectedItemColor: Colors.redAccent,
          unselectedItemColor: Colors.grey,
          showUnselectedLabels: true,
          type: BottomNavigationBarType.fixed,
        ),
      ),
    );
  }
}
