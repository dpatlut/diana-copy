Artist.delete_all
Album.delete_all
Genre.delete_all
Albumgenre.delete_all


tp=Artist.create({name:"Tom Petty", nationality:"American"})
jl=Artist.create({name:"John Lennon", nationality:"English"})

greatesthits =Album.create({title:"Greatist Hits", price:"9.99", artist_id:tp.id})
hypnoticeye = Album.create({title:"Hypnotic Eye", price:"9.99", artist_id:tp.id})
imagine =Album.create({title:"Imagine", price:"8.99", artist_id:jl.id})
doublefantasy =Album.create({title:"Double Fantasy", price:"9.99", artist_id:jl.id})


southrock = Genre.create({name: "Southern Rock"})
rock = Genre.create({name: "Rock"})

Albumgenre.create({album_id:greatesthits.id, genre_id:southrock.id})
Albumgenre.create({album_id:greatesthits.id, genre_id:rock.id})
Albumgenre.create({album_id:hypnoticeye.id, genre_id:southrock.id})
Albumgenre.create({album_id:hypnoticeye.id, genre_id:rock.id})
Albumgenre.create({album_id:imagine.id, genre_id:rock.id})
Albumgenre.create({album_id:doublefantasy.id, genre_id:rock.id})

