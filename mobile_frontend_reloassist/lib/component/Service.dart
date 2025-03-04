import 'package:flutter/material.dart';

class ServicesGrid extends StatelessWidget {
  final List<Map<String, String>> services = [
    {"name": "Home Rentals", "icon": "🏡"},
    {"name": "Appliance Rentals", "icon": "📺"},
    {"name": "Maid Services", "icon": "🧹"},
    {"name": "Ironing", "icon": "🧺"},
    {"name": "Grocery", "icon": "🛒"},
    {"name": "Plumbing", "icon": "🔧"},
  ];

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: NeverScrollableScrollPhysics(),
      itemCount: services.length,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
      ),
      itemBuilder: (context, index) {
        return Container(
          decoration: BoxDecoration(
            color: Colors.red[100],
            borderRadius: BorderRadius.circular(10),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(services[index]['icon']!, style: TextStyle(fontSize: 30)),
              SizedBox(height: 5),
              Text(services[index]['name']!,
                  textAlign: TextAlign.center,
                  style: TextStyle(fontWeight: FontWeight.bold)),
            ],
          ),
        );
      },
    );
  }
}
