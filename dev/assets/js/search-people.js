const peopleArr = [
    {
        id: 1,
        name: "Mark Zuckerberg",
        birth: "1984-05-14",
        photo: 'assets/img/photo-MarkZuckerberg.png',
        gender: 'male',
        history: "Mark Zuckerberg, a tech prodigy, embarked on a coding journey at an early age. His insatiable curiosity led him to create a revolutionary social media platform, Facebook. What started as a dorm-room project at Harvard University blossomed into a global phenomenon, reshaping how humanity connects and communicates. Mark's dedication to innovation and his unwavering belief in the power of technology have left an indelible mark on the world.",
        city: "White Plains, New York, USA"
    },
    {
        id: 2,
        name: "Claire Boucher",
        birth: "1988-03-17",
        photo: 'assets/img/photo-ClaireBoucher.png',
        gender: 'female',
        history: "Claire Boucher, professionally known as Grimes, carved her path as a boundary-pushing artist. From experimental music to mesmerizing visual art, Claire's creative genius knows no bounds. Her journey is one of defying conventions, embracing the unconventional, and weaving sonic and visual tapestries that captivate the imagination of all who encounter her work.",
        city: "Vancouver, British Columbia, Canada"
    },
    {
        id: 3,
        name: "Ty Simpkins",
        birth: "2001-08-06",
        photo: 'assets/img/photo-TySimpkins.png',
        gender: 'male',
        history: "Ty Simpkins, a rising star since childhood, captured hearts with his natural acting prowess. His journey began with endearing performances and evolved into compelling roles in major films. Ty's dedication to his craft and his ability to immerse himself in diverse characters have solidified his reputation as a young actor to watch in the entertainment industry.",
        city: "New York City, New York, USA"
    },
    {
        id: 4,
        name: "Tom Holland",
        birth: "1996-06-01",
        photo: 'assets/img/photo-TomHolland.png',
        gender: 'male',
        history: "Tom Holland's journey to stardom began when he was cast as the friendly neighborhood Spider-Man in the Marvel Cinematic Universe. His portrayal of the iconic superhero won the hearts of fans worldwide. Beyond swinging through skyscrapers, Tom has showcased his versatility in various film roles, proving himself as a promising actor with a bright future.",
        city: "Kingston upon Thames, London, England"
    },
    {
        id: 5,
        name: "Bill Gates",
        birth: "1955-10-28",
        photo: 'assets/img/photo-BillGates.png',
        gender: 'male',
        history: "Bill Gates, a visionary and a tech pioneer, co-founded Microsoft and played a pivotal role in bringing personal computing to the masses. His relentless pursuit of innovation and philanthropy has had a profound impact on global health, education, and technology. Bill's legacy is one of transforming the world through software and dedication to solving some of humanity's greatest challenges.",
        city: "Seattle, Washington, USA"
    },
    {
        id: 6,
        name: "Elon Musk",
        birth: "1971-06-28",
        photo: 'assets/img/photo-ElonMusk.png',
        gender: 'male',
        history: "Elon Musk, an entrepreneur and innovator, has been at the forefront of revolutionizing multiple industries. From electric cars with Tesla to space exploration with SpaceX, Musk's ventures have reshaped our understanding of what's possible. His audacious goals, bold vision, and relentless drive have inspired a new generation of thinkers and creators.",
        city: "Pretoria, Gauteng, South Africa"
    },
    {
        id: 7,
        name: "Talulah Jane",
        birth: "1985-10-12",
        photo: 'assets/img/photo-TalulahJane.png',
        gender: 'female',
        history: "Talulah Jane, a wordsmith and storyteller, embarked on a journey of crafting narratives that touch hearts and minds. Through her eloquent prose and captivating tales, she explores the human experience in all its complexities. Her ability to connect with readers on a profound level has earned her a place among the literary giants of our time.",
        city: "Dublin, Ireland"
    },
    {
        id: 8,
        name: "Bernard Arnault",
        birth: "1949-03-05",
        photo: 'assets/img/photo-BernardArnault.png',
        gender: 'male',
        history: "Bernard Arnault, a visionary in the world of luxury, reshaped the fashion industry as the head of LVMH. His journey began with a passion for craftsmanship and a keen business acumen. Under his leadership, LVMH has become a powerhouse, housing iconic brands that define elegance and style. Bernard's commitment to artistry and innovation continues to influence the global fashion landscape.",
        city: "Roubaix, France"
    },
    {
        id: 9,
        name: "Jeff Bezos",
        birth: "1964-01-12",
        photo: 'assets/img/photo-JeffBezos.png',
        gender: 'male',
        history: "Jeff Bezos, a trailblazer in e-commerce, founded Amazon, an online marketplace that transformed the way we shop. His entrepreneurial journey started with a small online bookstore and grew into a tech giant that disrupted numerous industries. Jeff's relentless pursuit of customer-centric innovation has left an indelible mark on modern commerce and reshaped the way we experience retail.",
        city: "Albuquerque, New Mexico, USA"
    },
    {
        id: 10,
        name: "Tosca Musk",
        birth: "1973-07-20",
        photo: 'assets/img/photo-ToscaMusk.png',
        gender: 'female',
        history: "Tosca Musk, a storyteller with a camera, has brought countless narratives to life on screen. Her directorial journey began with a passion for visual storytelling and a dedication to bringing characters and emotions to the forefront. Through her lens, she has woven tales that resonate with audiences around the world, making her a prominent figure in the film industry.",
        city: "Pretoria, Gauteng, South Africa"
    },
    {
        id: 11,
        name: "Steve Jobs",
        birth: "1955-02-24",
        photo: 'assets/img/photo-SteveJobs.png',
        gender: 'male',
        history: "Steve Jobs, a creative genius and tech icon, co-founded Apple Inc., a company that redefined consumer electronics. His journey was marked by innovation, design perfectionism, and a commitment to user-friendly technology. Steve's vision brought us products like the iPhone and MacBook, shaping modern culture and solidifying his legacy as one of the greatest innovators in history.",
        city: "San Francisco, California, USA"
    },
    {
        id: 12,
        name: "Amber Heard",
        birth: "1986-04-22",
        photo: 'assets/img/photo-AmberHeard.png',
        gender: 'female',
        history: "Amber Heard, an actress with depth and range, embarked on a journey in the world of cinema. Her career began with captivating performances and evolved into roles that explore the complexities of human emotion. Amber's dedication to her craft and her ability to immerse herself in diverse characters have solidified her reputation as a respected and versatile talent.",
        city: "Austin, Texas, USA"
    },
    {
        id: 13,
        name: "Laurene Powell",
        birth: "1963-11-06",
        photo: 'assets/img/photo-LaurenePowell.png',
        gender: 'female',
        history: "Laurene Powell, a visionary philanthropist, has dedicated her life to making a positive impact. Her journey began with a commitment to education and social change, which led to the creation of initiatives that empower communities and amplify voices. Laurene's advocacy for equal access to education and her dedication to fostering innovation have shaped a legacy of positive transformation.",
        city: "West Milford, New Jersey, USA"
    },
    {
        id: 14,
        name: "Eve Jobs",
        birth: "1998-05-06",
        photo: 'assets/img/photo-EveJobs.png',
        gender: 'female',
        history: "Eve Jobs, an equestrian and entrepreneur, embarked on a journey that harmoniously blends her passion for horse riding and her business acumen. Her dedication to equestrian sports has led her to excel in the arena, while her entrepreneurial spirit has driven her to create ventures that make a positive impact. Eve's journey is a testament to the balance of pursuing personal passions and making a difference.",
        city: "Los Angeles, California, USA"
    },
    {
        id: 15,
        name: "Chrisann Brennan",
        birth: "1954-09-29",
        photo: 'assets/img/photo-ChrisannBrennan.png',
        gender: 'female',
        history: "Chrisann Brennan, a creative force, embarked on a journey of artistic exploration that spans various mediums. Her journey began with a passion for expression and evolved into a multi-disciplinary exploration of visual arts. Through her work, Chrisann invites viewers to see the world from different perspectives, reminding us of the power of artistic interpretation and creativity.",
        city: "Dayton, Ohio, USA"
    },
    {
        id: 16,
        name: "Cara Delevingne",
        birth: "1992-08-12",
        photo: 'assets/img/photo-CaraDelevingne.png',
        gender: 'female',
        history: "Cara Delevingne, a model and actress, embarked on a transformative journey from the fashion runway to the silver screen. Her journey began with a breakthrough in the modeling world and transitioned into a pursuit of acting, where she brought characters to life with depth and charisma. Cara's ability to captivate audiences with her presence and talent has established her as a rising star in entertainment.",
        city: "London, England"
    },
    {
        id: 17,
        name: "Cam Gigandet",
        birth: "1982-08-16",
        photo: 'assets/img/photo-CamGigandet.png',
        gender: 'male',
        history: "Cam Gigandet, an actor with range and charisma, embarked on a journey in the world of entertainment. His career began with compelling performances and evolved into roles that showcase his versatility and talent. Cam's dedication to his craft and his ability to bring depth to characters have solidified his reputation as a respected and sought-after actor.",
        city: "Tacoma, Washington, USA"
    },
    {
        id: 18,
        name: "Sean Faris",
        birth: "1982-03-25",
        photo: 'assets/img/photo-SeanFaris.png',
        gender: 'male',
        history: "Sean Faris, an actor with a passion for storytelling, embarked on a journey of bringing characters to life on screen. His career began with roles that captured hearts and evolved into performances that explore the human experience. Sean's dedication to his craft and his ability to evoke emotions have established him as a versatile and compelling actor in the entertainment industry.",
        city: "Houston, Texas, USA"
    },
    {
        id: 19,
        name: "Penn Badgley",
        birth: "1986-11-01",
        photo: 'assets/img/photo-PennBadgley.png',
        gender: 'male',
        history: "Penn Badgley, an actor known for his depth and authenticity, embarked on a journey of bringing complex characters to life. His career began with roles that resonated with audiences and evolved into performances that challenge conventions. Penn's commitment to his craft and his ability to convey raw emotions have solidified his reputation as a respected and accomplished actor.",
        city: "Baltimore, Maryland, USA"
    },
    {
        id: 20,
        name: "Camille Vasquez",
        birth: "1985-06-15",
        photo: 'assets/img/photo-CamilleVasquez.png',
        gender: 'female',
        history: "Camille Vasquez, a culinary virtuoso, embarked on a journey of flavors and experiences. Her passion for the culinary arts led her to explore diverse cuisines, pushing the boundaries of taste and presentation. Camille's ability to create culinary masterpieces that delight the senses has earned her a place among the world's most celebrated chefs.",
        city: "Barcelona, Spain"
    },
    {
        id: 21,
        name: "Jamie Dornan",
        birth: "1982-05-01",
        photo: 'assets/img/photo-JamieDornan.png',
        gender: 'male',
        history: "Jamie Dornan, an actor and musician, embarked on a journey of captivating audiences through his performances. His career began with roles that showcased his talent and evolved into projects that highlight his versatility. Jamie's ability to convey emotions and immerse himself in characters has established him as a prominent and respected figure in the world of entertainment.",
        city: "Belfast, Northern Ireland"
    },
    {
        id: 22,
        name: "Gemma Arterton",
        birth: "1986-02-02",
        photo: 'assets/img/photo-GemmaArterton.png',
        gender: 'female',
        history: "Gemma Arterton, an actress with a penchant for diverse roles, embarked on a journey of bringing complex characters to life. Her career began with performances that showcased her range and evolved into projects that challenge norms. Gemma's ability to portray strength and vulnerability has solidified her reputation as a versatile and respected talent in the world of cinema.",
        city: "Gravesend, Kent, England"
    },
    {
        id: 23,
        name: "Tom Hiddleston",
        birth: "1981-02-09",
        photo: 'assets/img/photo-TomHiddleston.png',
        gender: 'male',
        history: "Tom Hiddleston, an actor with a penchant for depth and nuance, embarked on a journey of bringing intricate characters to life on screen. His career began with roles that captured audiences' attention and evolved into performances that delve into the human psyche. Tom's ability to embody both heroism and complexity has established him as a respected and compelling actor.",
        city: "Westminster, London, England"
    },
    {
        id: 24,
        name: "Eloise Mumford",
        birth: "1986-09-24",
        photo: 'assets/img/photo-EloiseMumford.png',
        gender: 'female',
        history: "Eloise Mumford, an actress with a passion for storytelling, embarked on a journey of bringing characters to life on screen. Her career began with roles that resonated with audiences and evolved into performances that explore the depths of human emotion. Eloise's dedication to her craft and her ability to connect with viewers have established her as a talented and compelling presence in the entertainment industry.",
        city: "Olympia, Washington, USA"
    },
    {
        id: 25,
        name: "Idris Elba",
        birth: "1972-09-06",
        photo: 'assets/img/photo-IdrisElba.png',
        gender: 'male',
        history: "Idris Elba, an actor and musician of immense talent, embarked on a journey that spans multiple artistic realms. His career began with roles that showcased his versatility and evolved into projects that redefine the boundaries of entertainment. Idris's ability to command the screen and the stage has solidified his reputation as a respected and influential figure in the world of arts.",
        city: "Hackney, London, England"
    },
    {
        id: 26,
        name: "Lily Collins",
        birth: "1989-03-18",
        photo: 'assets/img/photo-LilyCollins.png',
        gender: 'female',
        history: "Lily Collins, an actress and writer with a penchant for depth and authenticity, embarked on a journey of bringing diverse characters to life. Her career began with roles that resonated with audiences and evolved into projects that challenge conventions. Lily's ability to convey complex emotions and her dedication to her craft have established her as a respected and accomplished talent in the world of entertainment.",
        city: "Guildford, Surrey, England"
    },
    {
        id: 27,
        name: "Chris Hemsworth",
        birth: "1983-08-11",
        photo: 'assets/img/photo-ChrisHemsworth.png',
        gender: 'male',
        history: "Chris Hemsworth, an actor known for his charisma and physical prowess, embarked on a journey of bringing iconic characters to life on screen. His career began with roles that captured hearts and evolved into performances that showcase his range. Chris's dedication to his craft and his ability to embody both strength and vulnerability have solidified his reputation as a prominent figure in entertainment.",
        city: "Melbourne, Victoria, Australia"
    },
    {
        id: 28,
        name: "Rachel McAdams",
        birth: "1978-11-17",
        photo: 'assets/img/photo-RachelMcAdams.png',
        gender: 'female',
        history: "Rachel McAdams, an actress with a flair for complex characters, embarked on a journey of bringing emotion and depth to the screen. Her career began with roles that resonated with audiences and evolved into performances that explore the intricacies of the human experience. Rachel's ability to convey authenticity and vulnerability has established her as a respected and celebrated talent in the world of cinema.",
        city: "London, Ontario, Canada"
    },
    {
        id: 29,
        name: "Rami Malek",
        birth: "1981-05-12",
        photo: 'assets/img/photo-RamiMalek.png',
        gender: 'male',
        history: "Rami Malek, an actor with an enigmatic presence, embarked on a journey of bringing diverse and layered characters to life on screen. His career began with roles that captured attention and evolved into performances that challenge perceptions. Rami's ability to immerse himself in characters and his dedication to authenticity have solidified his reputation as a compelling and accomplished actor.",
        city: "Los Angeles, California, USA"
    },
    {
        id: 30,
        name: "Olga Kurylenko",
        birth: "1979-11-14",
        photo: 'assets/img/photo-OlgaKurylenko.png',
        gender: 'female',
        history: "Olga Kurylenko, an actress and model of international acclaim, embarked on a journey that spans cultures and genres. Her career began with roles that showcased her versatility and evolved into performances that captivate audiences. Olga's ability to bring depth to characters and her dedication to her craft have established her as a respected and influential figure in the world of entertainment.",
        city: "Berdyansk, Ukrainian"
    },
    {
        id: 31,
        name: "Chris Pratt",
        birth: "1979-06-21",
        photo: 'assets/img/photo-ChrisPratt.png',
        gender: 'male',
        history: "Chris Pratt, an actor known for his charm and comedic timing, embarked on a journey of bringing beloved characters to life on screen. His career began with roles that captured hearts and evolved into performances that showcase his versatility. Chris's ability to infuse humor and authenticity into his characters has solidified his reputation as a prominent and beloved figure in entertainment.",
        city: "Virginia, Minnesota, USA"
    },
    {
        id: 32,
        name: "Zoe Saldana",
        birth: "1978-06-19",
        photo: 'assets/img/photo-ZoeSaldana.png',
        gender: 'female',
        history: "Zoe Saldana, an actress with a penchant for strong and compelling roles, embarked on a journey of bringing diverse characters to life. Her career began with performances that resonated with audiences and evolved into projects that challenge norms. Zoe's ability to convey depth and strength has solidified her reputation as a versatile and respected talent in the world of cinema.",
        city: "Passaic, New Jersey, USA"
    },
    {
        id: 33,
        name: "Taylor Lautner",
        birth: "1992-02-11",
        photo: 'assets/img/photo-TaylorLautner.png',
        gender: 'male',
        history: "Taylor Lautner, an actor known for his physical prowess and versatility, embarked on a journey of bringing characters to life on screen. His career began with roles that captured attention and evolved into performances that showcase his range. Taylor's ability to embody different personas and his dedication to his craft have solidified his reputation as a respected and sought-after figure in entertainment.",
        city: "Grand Rapids, Michigan, USA"
    },
    {
        id: 34,
        name: "Jennifer Lawrence",
        birth: "1990-08-15",
        photo: 'assets/img/photo-JenniferLawrence.png',
        gender: 'female',
        history: "Jennifer Lawrence, an actress celebrated for her authenticity and emotional depth, embarked on a journey of bringing complex characters to life. Her career began with roles that resonated with audiences and evolved into performances that challenge norms. Jennifer's ability to convey vulnerability and strength has established her as a respected and influential talent in the world of cinema.",
        city: "Indian Hills, Kentucky, USA"
    },
    {
        id: 35,
        name: "John Legend",
        birth: "1978-12-28",
        photo: 'assets/img/photo-JohnLegend.png',
        gender: 'male',
        history: "John Legend, a musician and songwriter of immense talent, embarked on a musical journey that has touched hearts and inspired change. His career began with soulful performances and evolved into projects that challenge societal norms. John's ability to evoke emotions through his music and his dedication to advocacy have solidified his reputation as a respected and influential figure in the world of entertainment.",
        city: "Springfield, Ohio, USA"
    },
    {
        id: 36,
        name: "Emma Stone",
        birth: "1988-11-06",
        photo: 'assets/img/photo-EmmaStone.png',
        gender: 'female',
        history: "Emma Stone, an actress with a flair for authenticity and wit, embarked on a journey of bringing diverse and relatable characters to life. Her career began with roles that resonated with audiences and evolved into performances that challenge conventions. Emma's ability to convey raw emotion and her dedication to her craft have established her as a respected and celebrated talent in the world of cinema.",
        city: "Scottsdale, Arizona, USA"
    },
    {
        id: 37,
        name: "Mahershala Ali",
        birth: "1974-02-16",
        photo: 'assets/img/photo-MahershalaAli.png',
        gender: 'male',
        history: "Mahershala Ali, an actor known for his profound performances and magnetic presence, embarked on a journey of bringing complex characters to life on screen. His career began with roles that captured attention and evolved into performances that explore the human experience. Mahershala's ability to convey depth and vulnerability has established him as a respected and accomplished figure in the world of entertainment.",
        city: "Oakland, California, USA"
    },
    
    
    {
        id: 38,
        name: "Margot Robbie",
        birth: "1991-02-07",
        photo: 'assets/img/photo-MargotRobbie.png',
        gender: 'female',
    },
    {
        id: 39,
        name: "Scarlett Johansson",
        birth: "1984-11-22",
        photo: 'assets/img/photo-ScarlettJohansson.png',
        gender: 'female',
    },
    {
        id: 40,
        name: "Angelina Jolie",
        birth: "1975-06-04",
        photo: 'assets/img/photo-AngelinaJolie.png',
        gender: 'female',
    },
    {
        id: 41,
        name: "Gal Gadot",
        birth: "1985-04-30",
        photo: 'assets/img/photo-GalGadot.png',
        gender: 'female',
    },
    {
        id: 42,
        name: "Vito Schnabel",
        birth: "1986-07-27",
        photo: 'assets/img/photo-VitoSchnabel.png',
        gender: 'male',
    },
    {
        id: 43,
        name: "Dylan Minnette",
        birth: "1996-12-29",
        photo: 'assets/img/photo-DylanMinnette.png',
        gender: 'male',
    },
    {
        id: 44,
        name: "Ansel Elgort",
        birth: "1994-03-14",
        photo: 'assets/img/photo-AnselElgort.png',
        gender: 'male',
    },
    {
        id: 45,
        name: "Timothée Chalamet",
        birth: "1995-12-27",
        photo: 'assets/img/photo-TimothéeChalame.png',
        gender: 'male',
    },
    {
        id: 46,
        name: "Josh Hutcherson",
        birth: "1992-10-12",
        photo: 'assets/img/photo-JoshHutcherson.png',
        gender: 'male',
    },
    {
        id: 47,
        name: "Aimee Wood",
        birth: "1993-09-01",
        photo: 'assets/img/photo-AimeeWood.png',
        gender: 'female',
    },
    {
        id: 48,
        name: "Chloë Moretz",
        birth: "1997-02-10",
        photo: 'assets/img/photo-ChloëMoretz.png',
        gender: 'female',
    },
    {
        id: 49,
        name: "Mimi Keene",
        birth: "1999-08-05",
        photo: 'assets/img/photo-MimiKeene.png',
        gender: 'female',
    },
    {
        id: 50,
        name: "Elle Fanning",
        birth: "1998-04-09",
        photo: 'assets/img/photo-ElleFanning.png',
        gender: 'female',
    },
    {
        id: 51,
        name: "Dakota Fanning",
        birth: "1994-02-23",
        photo: 'assets/img/photo-DakotaFanning.png',
        gender: 'female',
    },
    {
        id: 52,
        name: "Justice Smith",
        birth: "1996-08-09",
        photo: 'assets/img/photo-JusticeSmith.png',
        gender: 'male',
    },
    {
        id: 53,
        name: "Isabella Sermon",
        birth: "2005-07-08",
        photo: 'assets/img/photo-IsabellaSermon.png',
        gender: 'female',
    },
    {
        id: 54,
        name: "Omar Sy",
        birth: "1978-01-20",
        photo: 'assets/img/photo-OmarSy.png',
        gender: 'male',
    }
];

// Теперь у вас есть полный список объектов peopleArr с указанием места рождения для каждой персоны.



window.addEventListener('load', function () {
    const usersContainer = document.querySelector('.users-container') 
    const genderSelect = document.querySelector('#genderSelect')
    const genderCustomSelect = document.querySelector('#genderSelect + nice-select')
    const ageInput = document.querySelector('#ageFilter');
    const nameInput = document.querySelector('#nameFilter');
    
 
    const updatedPeopleArr = peopleArr.map(person => {
        const birthDate = new Date(person.birth);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear() - (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0);
        
        return { ...person, age: age };
    });

    console.table(updatedPeopleArr);

    const renderPerson = (persons) => {
        const list = persons.map(person => {
            return(
                `
                <div class="col-lg-6 col-xl-3">
                <div class="person">
                    <div class="person-img-box">
                        <img src="${person.photo}" class="img-fluid" alt="${person.id}">
                        <div class="person-status">Триває пошук</div>
                    </div>
                    <div class="person-name">${person.name}</div>
                    <div class="person-date">${person.age}р.н.</div>
                    <div class="person-place">
                        <div class="person-place-title">Місце зникнення:</div>
                        <div class="person-place-adress">${person.city}</div>
                    </div>
                    <div class="person-details">Детальніше про людину</div>
                    
                </div>
            </div>
                ` 
            )
        }).join("")
        usersContainer.innerHTML = list
    } 
    renderPerson(updatedPeopleArr)

 
    let config = {
            gender: "all",
            age: '100',
            name: "",
        }


    function getGenderVal() {
        genderSelect.addEventListener("click", () => {
                let val = item.getAttribute('value')
                config.gender = val
              

                const filteredForGender = mainFilter();
                renderPerson(filteredForGender);
            })
      
    }
    getGenderVal()
    
    function getAgeVal() {
        ageInput.addEventListener("input", (event) => {
           let val = event.target.value
        
           config.age = val
         
           const filteredForAge = mainFilter();
           renderPerson(filteredForAge);
        })
    }
    getAgeVal()

    function getNameVal() {
        nameInput.addEventListener("input", (event) => {
            let val = event.target.value.toLowerCase().trim()
            config.name = val

            const filteredForName = mainFilter();
            renderPerson(filteredForName)
        })
    }
    getNameVal()



   
    // function ageFilter() {
    //     return updatedPeopleArr.filter(item => item.age <= config.age)
    // } 

    // function genderFilter() {
    //     return (config.gender === "all" ? updatedPeopleArr : updatedPeopleArr.filter(item => item.gender === config.gender))
    // }

    // function nameFilter() {
    //     return updatedPeopleArr.filter(item => item.name.toLowerCase().includes(config.name))
    // }

 


    function mainFilter() {
        const filtered = updatedPeopleArr.filter(item => {
            const setAge =  item.age <= config.age
            const setGender = config.gender === "all" ? updatedPeopleArr : item.gender === config.gender 
            const setName = item.name.toLowerCase().includes(config.name) 

            return setName && setGender && setAge
        })
        return filtered;
    }

 


 
})
  