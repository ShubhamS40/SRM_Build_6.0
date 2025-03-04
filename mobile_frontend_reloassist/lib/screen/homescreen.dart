import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:reloassist/component/Exclusiveoffer.dart';
import 'package:reloassist/component/RentalHomesSection.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.redAccent,
        elevation: 0,
        title: Text(
          'ReloAssist',
          style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
        ),
        actions: [
          Icon(Icons.notifications, color: Colors.white),
          SizedBox(width: 16),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: EdgeInsets.all(16.0),
              child: TextField(
                decoration: InputDecoration(
                  hintText: 'Search services...',
                  prefixIcon: Icon(Icons.search, color: Colors.redAccent),
                  filled: true,
                  fillColor: Colors.grey[200],
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: BorderSide.none,
                  ),
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              child: Text(
                'Services',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ),

            // GridView for Services with Styled Cards
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12.0),
              child: GridView.builder(
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  childAspectRatio: 1.0,
                ),
                itemCount: categories.length,
                itemBuilder: (context, index) {
                  return GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => RentalHomesPage()),
                      );
                    },
                    child: Container(
                      margin: EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        color: Color(0xFFFB9AA0), // 🔴 Light Red Background
                        borderRadius:
                            BorderRadius.circular(12), // Rounded Corners
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black26,
                            blurRadius: 4,
                            offset: Offset(2, 2),
                          ),
                        ],
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(categories[index]['icon'],
                              size: 30, color: Colors.white),
                          SizedBox(height: 8),
                          Text(
                            categories[index]['title'],
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 12, color: Colors.white),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ),

            Padding(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              child: Text(
                'Exclusive Offers',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ),
            SingleChildScrollView(
              child: ExclusiveOffersSection(),
            ),
          ],
        ),
      ),
    );
  }
}

List<Map<String, dynamic>> categories = [
  {'title': 'Rental Homes', 'icon': FontAwesomeIcons.home},
  {'title': 'Appliance Rental', 'icon': FontAwesomeIcons.tv},
  {'title': 'Domestic Help', 'icon': FontAwesomeIcons.user},
  {'title': 'Laundry & Ironing', 'icon': FontAwesomeIcons.tshirt},
  {'title': 'Grocery Market', 'icon': FontAwesomeIcons.shoppingBasket},
  {'title': 'Furniture Rental', 'icon': FontAwesomeIcons.couch},
];
