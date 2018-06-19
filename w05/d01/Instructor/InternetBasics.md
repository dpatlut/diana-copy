## Objectives
- You will be able to explain how apps talk to each other over the internet

## Important Vocab

- Client/Server
- the cloud
- IP Address
- Domain Name/DNS
- traceroute
- telnet
- localhost/127.0.0.1
- port and typical port numbers
- TCP
- HTTP

**Warm-Up Activity**: You write your friends a series of 15 letters, each containing a different part of a story. You send him one per day. How do you ensure that he gets all of the letters and can read the story in the proper order?

## Program to Programs
Up until now, your programs have been local to your own computer and a single user.

For example, you create a command line app (like Mad Libs or the Movie Haus), someone goes to your computer, types a command and some arguments, and all of the interaction happens between the user and the program. But, what if the owner of Moive Haus decides to open up several other locations? How annoying would it be for him to travel to each site every time the movie selection changes?

Programs can also talk to each other over a network.  We can have a **server** that other computers (**clients**) can connect to. This server can deliver apps to other users, manage our api keys, and be the gateway to our database. 

Over the course of the next week you'll learn how to:

 - write servers using TCP
 - write servers using HTTP
 - deploy your servers to Digital Ocean

But first, let's talk about the internet.

## The Internet

The internet is basically a network of computers sending data back and forth to each another. People often use *the cloud* as a way to describe the internet.
 
Each computer on the internet has its own IP address, which is like a mailing address for the internet.  If you are behind a router, then you have an IP address, relative to your router, and then your router has an "external" IP address, which is what the rest of the internet sees.  To get your external IP address, you can search "IP address" on Google. Your IP address is your unique address on the internet.  If you're behind a router, then your router knows how to route things to your unique address relative to the router. Routers handle sending data from one ip address to another.

An ip address is like the **mailing address** of an apartment building.

- **Activity**: Search "ip address" on Google and follow the link explaining more about ip addresses.

## Ports

Computers can keep track of many 'conversations' at once by using **ports**. Ports are virtual communication channels. Computers can maintain several simultaneous `ports`, which are like mailboxes to send and receive data.  Servers/clients can listen for or send data on a specific port.  So we need to know which port on which IP address to send data to. Or we can set up a server to listen for incoming requests on a certain port.

Typical ports include: 22 for `ssh`, 23 for `telnet`, 80 for web servers, 27960 for Quake III.

A port is like the **APT#** portion of a mailing address, or the **"C/O ..."** portion


## The Networking Stack

With this knowledge, we can talk about the networking stack, which is made up of many layers. The networking stack is a simplified model of the networking process.

<img src = "http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag2.gif" />

The **Application layer** is where your server, your browser, your mail program, or any other program that needs to access the internet is.  When a request is made, it goes to the TCP layer. 

**TCP** is a protocol (Transmission Control Protocol).  It is how most of our programs communicate over the internet.  HTTP (the web), mail clients, chat programs, and many others use it.  It is considered reliable because it verifies that all data packets have been received when a transmission happens, and that they are in the right order, regardless of what order they came in.  The TCP level will add information to the request for what port it goes to.

Alternatively, there is UDP (User Datagram Protocol), which is faster, but less reliable.  It's less reliable because it doesn't check that it received everything on the other end, but that also makes it faster.  This isn't used as often, but can be used in things like voice chatting, where speed is crucial.

After a port is assigned, the request goes to the **IP layer**, where the IP address is added to the request. The IP layer handles all of the addressing concerns of networking.

Finally the request is passed to the **Hardware layer**, where messages are encoded as electrical/light signals and sent over wires to the internet.

When a request from one computer gets to another, it goes back up the stack on that server and is sent to the appropriate application.

- **Activity**: Reseach analogies comparing TCP to mailing a letter.

## Postal network and TCP/IP analogy 
inspiration: (http://bpastudio.csudh.edu/fac/lpress/471/hout/netech/postofficelayers.htm)

- **Application layer**

  - Postal network: Someone writes a letter to a friend in New York, addresses it, and drops it in a mailbox. The friend opens the letter and reads it with a smile on his face. Neither of them think about how the letter got there -- did it go in a Ford or Chevrolet truck to the airport, what was the name of the person driving the truck, did it fly straight to New York or was it transferred to another plane in Kansas City, etc.? They are working at the application layer -- getting work done. They are communicating directly with each other, unaware of the underlying delivery mechanism.  

  - TCP/IP: A user retrieves a Web page from a server in New York by typing a URL into a browser and clicking the enter key. The server receives the request, finds the page on its hard drive and sends it back to the user. Neither the user nor the client or server software is aware of the way the messages were delivered -- did they go over wireless connections, how many routers did they pass through, who manufactured the routers, was the server a PC or a rack-mounted machine, was it running IIS or Apache, etc.? There are many application layer protocols. 

- **Transport layer**

  - Postal network: If you accidentally write the wrong address on a letter to someone in Kansas, a postal employee in Kansas will stamp it "address unknown" and it will be returned to you. You will also be informed if a registered letter cannot be delivered. You will be unaware of the details of the error message delivery system, and it will be up to you to decide what to do next. There are a set of postal rules to ensure a *reliable* exchange of letters.

  - TCP/IP: Transport layer software establishes a connection between a client and server then monitors that connection for errors. It also slows transmission if it gets too fast to handle at the other end. Transport layer software is not concerned with how the data is actually moved from one point to the other -- that is the responsibility of lower level software. There are two transport layer protocols TCP (reliable) and UDP (unreliable, but fast). If TCP tries repeatedly and errors persist, it informs its "boss," the application program.

- **Internet layer**

  - Postal network: Airplanes move letters between cities. The pilot does not pay attention to who the letters are addressed to or from, what they say, or whether they contain photos and drawings or only written words. Trucks move letters within a city.

  - TCP/IP: Internet layer programs move data between networks. IP is the internet layer protocol. IP software ignores the data, and it does the same thing with a packet whether it comes from the Dalai Lama or your mother in law. Once the data gets to its destination local area network (LAN), it is handed over to data link layer software or firmware for delivery to the proper computer. Data Link layer programs move (incoming and outgoing) data within LANs. Ethernet is the most common data link protocol. A data link program is not concerned with how outgoing data will be handled once it leaves the LAN or how incoming data got there. That is the responsibility of the internet layer software.

- **Physical layer**

  - Postal network: People use pens and paper to write letters, and the recipient reads them using reflected light and sometimes glasses.

  - TCP/IP: Physical layer protocols specify the means of representing ones and zeros (bits). The method of transmitting them between two points using wire, radio, fiber, etc. is also specified. There are many ways to make ones and zeros and many ways to transmit them so there are many physical layer protocols.


## What happens when I go to a site in the browser?

1.) The browser sends a request to a **DNS server**. DNS servers translate names like `http://www.google.com` into IP addresses.

2.) When the IP address is sent back to the browser, the browser opens a TCP connection to the server's IP address on port 80 (default port for HTTP).  

3.) When the server receives the request, it will usually respond with the requested page as HTML.

4.) The browser will end the TCP request when it gets the HTML response (a text string).

5.) As it renders the page, the browser may find links to additional assets (JavaScript files, CSS, images, etc.) and will open up requests for each of those.

- **Activity**: Type `traceroute www.google.com` in the terminal.

## Writing a TCP server
TCP Provides a *reliable* link between computers. If packets get lost, they get retransmitted. Many other protocols use TCP as the foundation of their communication (HTTP, FTP, TFTP, SMTP).  TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent. 

**What is a server?**
  A server is a computer that:

  - manages api keys
  - acts as a central interface to data
  - manages interaction between multiple clients/computers
    
You can focus on programming 1 computer (a server) to respond to requests from another computer (or many at the same time!). To test a 'virtual' version of your server you'll at first direct your client to access either ```http://localhost``` or ```http:/127.0.0.1```. This is a private ip address that cannot be accessed via the internet. 

We are going to rely on TCP... the communication process will be very abstract for us. Because TCP doesn't include the Application layer you can use ```telnet``` in Terminal to test your server (and act as an easy client!).

