import 'package:flutter/material.dart';
import 'package:reloassist/component/Rentalhomepagedetail.dart';

class RentalHomesPage extends StatefulWidget {
  @override
  _RentalHomesPageState createState() => _RentalHomesPageState();
}

class _RentalHomesPageState extends State<RentalHomesPage> {
  final List<Map<String, String>> rentalHomes = [
    {
      "title": "Modern Living Space",
      "location": "Downtown, NY",
      "bhk": "2 BHK",
      "price": "\$2,500/month",
      "image":
          "https://imgs.search.brave.com/AJpIIgqJORXFgXKwCqvUIYEapfALBDCLiNdxU8KwQew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/NDA4NDMyL3Bob3Rv/L29wZW4tbGl2aW5n/LXNwYWNlLWluLW1v/ZGVybi1ob3VzZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MC1iMzREd20xUTJz/dUYyUWZZMm5DcWN6/aExCUld6Y3BwcU8y/WWZVSWtmcz0"
    },
    {
      "title": "Luxury 3BHK Home",
      "location": "Los Angeles",
      "bhk": "3 BHK",
      "price": "\$3,800/month",
      "image":
          "https://imgs.search.brave.com/8ROwggd0I4QnKm4k7Gj2mOzU6dyNdGhKIWhlRDwM0aQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/NjAxMTc1Ni9waG90/by9kZWNvcmF0ZWQt/bGl2aW5nLXJvb20t/YXQtaG9tZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9OU1q/Y1ZHTTYwQjRXR3pH/aEVhdy1ZeTg1WjhG/eFRsTFkyMDAxU2o5/ZTA4VT0"
    }
  ];

  List<Map<String, String>> filteredHomes = [];
  TextEditingController searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    filteredHomes = rentalHomes;
  }

  void filterSearch(String query) {
    setState(() {
      filteredHomes = rentalHomes
          .where((home) =>
              home['title']!.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:
            const Text("Rental Homes", style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.redAccent,
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications, color: Colors.white),
            onPressed: () {},
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            // 🔍 Search Bar
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              decoration: BoxDecoration(
                color: Colors.grey[200],
                borderRadius: BorderRadius.circular(10),
              ),
              child: TextField(
                controller: searchController,
                onChanged: filterSearch,
                decoration: const InputDecoration(
                  hintText: "Search Rental Homes...",
                  prefixIcon: Icon(Icons.search, color: Colors.redAccent),
                  border: InputBorder.none,
                ),
              ),
            ),
            const SizedBox(height: 10),

            // 🏠 Rental Homes List
            Expanded(
              child: ListView.builder(
                itemCount: filteredHomes.length,
                itemBuilder: (context, index) {
                  return Card(
                    color: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    margin: const EdgeInsets.symmetric(vertical: 8),
                    child: ListTile(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => RentalHomePageDetail(
                                homeDetails: filteredHomes[index]),
                          ),
                        );
                      },
                      contentPadding: const EdgeInsets.all(10),
                      leading: ClipRRect(
                        borderRadius: BorderRadius.circular(8),
                        child: Image.network(
                          filteredHomes[index]['image']!,
                          width: 60,
                          height: 60,
                          fit: BoxFit.cover,
                        ),
                      ),
                      title: Text(
                        filteredHomes[index]['title']!,
                        style: const TextStyle(
                            fontWeight: FontWeight.bold, color: Colors.black),
                      ),
                      subtitle: Text(
                        "${filteredHomes[index]['bhk']} - ${filteredHomes[index]['location']}",
                        style: TextStyle(color: Colors.grey[700]),
                      ),
                      trailing: Text(
                        filteredHomes[index]['price']!,
                        style: const TextStyle(
                          color: Colors.red,
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
