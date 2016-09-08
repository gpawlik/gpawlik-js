var GRZEGORZPAWLIK = GRZEGORZPAWLIK || {};

GRZEGORZPAWLIK.Developer = GRZEGORZPAWLIK.Developer || {};
GRZEGORZPAWLIK.Developer.Seed = GRZEGORZPAWLIK.Developer.Seed || {};

GRZEGORZPAWLIK.Developer.Seed.titles = {
    "title": "var GRZEGORZPAWLIK = GRZEGORZPAWLIK || {};",
    "role": "GRZEGORZPAWLIK.Developer = GRZEGORZPAWLIK.Developer || {};"
};

GRZEGORZPAWLIK.Developer.Seed.contact = {
    "city": "Barcelona ES, 08003",
    "email": "pawlik.gregor@gmail.com",
    "Resume": "files/grzegorz-pawlik-resume-2016.pdf",
    "LinkedIn": "http://www.linkedin.com/in/pawlikgrzegorz",    
    "Github": "https://github.com/gpawlik"        
};

GRZEGORZPAWLIK.Developer.Seed.projects = {
    "recentProjects": {   
        "TripPlanner (Travel Web Application)": "http://tripplanner.gpawlik.com",
        "Wilson (Management Platform for FB Apps)": "http://showcase.gpawlik.com/project/wilson",
        "Domingo (Travel Inspiration Site)": "http://letsdomingo.com",
        "eDreams Prize Alerts (FB App)": "https://www.facebook.com/eDreams/app_846536198741959",
        "eDreams Blog (Template redesign)": "http://blog.edreams.com",
        "eDreams Hotels Landing Pages (Template redesign)" : "http://www.edreams.es/engine/campaigns/dynpack/?cityName=paris-test",
        "Follow Travel (Twitter contest)" : "http://blog.edreams.es/follow-travel/",                
        "Dear Christmas (FB App)": "http://apps-odigeo.com/apps/dearchristmas/",        
        "Dont Pay Me (Personal)": "http://dontpayme.com",
        "* GIFs are forever (Images)": "http://showcase.gpawlik.com/project/gifs-are-forever/"      
    }
};

GRZEGORZPAWLIK.Developer.Seed.tech = {
    "HTML/CSS/JavaScript": ["Sass & LESS", "Compass", "jQuery", "AngularJS", "Templates: Mustache, Handlebars", "Grunt", "Responsive design", "Facebook/Twitter/Youtube API", "Bootstrap"],
    "PHP": ["WordPress", "CodeIgniter", "Drupal", "Joomla", "Zend", "Laravel", "PHPUnit", "AdWords API"]
};

GRZEGORZPAWLIK.Developer.Seed.refs = {
    "professional": [{
        "name": "Flavio Rodrigues",
        "role": "Head of SEM",
        "email": "flavio.rodrigues@odigeo.com "
    }, {
        "name": "Bob Samii",
        "role": "Head of Marketing",
        "email": "bsamii@inmotionrealestate.com "
    }, {
        "name": "Laura Tufari",
        "role": "Head of Social Media",
        "email": "laura.tufari@odigeo.com "
    }, {
        "name": "Coen Smeekes",
        "role": "Founder",
        "email": "coen@bluebirdmedia.nl"
    }],
    "personal": [{
        "name": "Krystyna Pawlik",
        "role": "Mom"
    }, {
        "name": "Tomasz Pawlik",
        "role": "Brother"
    }]
};

GRZEGORZPAWLIK.Developer.Seed.edu = [{
    "school": "Wroclaw University of Technology",
    "degree": "Master of Science",
    "major": "Telecommunication Engineering",
    "class": "2004"
}, {
    "school": "Universidad Miguel Hernández de Elche",    
    "major": "Informatics and Telecommunications",
    "class": "2007"
}];

GRZEGORZPAWLIK.Developer.Seed.xp = {
    "professional": [{
        "role": "JavaScript Developer",
        "company": "eDreams Odigeo",
        "description": "Being part of a frontend team of the Europe's leading online travel agency working on its core platform.",
        "date": "11/2015-now",
        "clients": ["eDreams", "Opodo", "GoVoyages", "Travellink", "Liligo"]
    }, {
        "role": "Senior Web Developer",
        "company": "eDreams Odigeo",
        "description": "Working on data-heavy projects for the capabilities team within the SEM department.",
        "date": "06/2015-11/2015",
        "clients": ["eDreams", "Opodo", "GoVoyages", "Travellink", "Liligo"]
    }, {
        "role": "Web Developer",
        "company": "eDreams Odigeo",
        "description": "Front and backend development on the variety of projects within the Marketing department.",
        "date": "05/2012-06/2015",
        "clients": ["eDreams", "Opodo", "GoVoyages", "Travellink", "Liligo"]
    }, {
        "role": "Full-Stack Developer",
        "company": "BlueBirdMedia",
        "description": "Wide range of sites & apps from small micro-sites contests to CMS solutions",
        "date": "07/2011-05/2012",
        "clients": ["Mainly small and medium dutch-based companies"]
    }, {
        "role": "Web Developer",
        "company": "Internet Advantage",
        "description": "Development and optimization of clients sites and marketing campaigns.",
        "date": "01/2011-08/2011",
        "clients": ["TECS", "PsychCorp", "ADT", "Turismo Madrid", "Bayer"]
    }]
};

GRZEGORZPAWLIK.Developer.Resume = function(seed) {

    if (!seed) {
        throw ("Seed doesn't exist");        
    }

    var _seed = seed,
        _modules = ['Title', 'Contact', 'Projects', 'Technologies',
            'Experience', 'Education'
        ],
        _modulesLen = _modules.length;

    var _pFuncs = {

        _addTitle: function() {
            var titles = _seed.titles,
                str = '';
            str += '<header class="gp-header">';
            str += '<h1>' + titles.title + '</h1>';
            str += '<p>' + titles.role + '</p>';
            str += '</header>';

            document.body.innerHTML += str;
        },

        _addContact: function() {
            var contactInfo = _seed.contact,
                item, str = '';

            str += '<div class="gp-module gp-contact-info">';
            str += this._createTitle('Contact');
            for (item in contactInfo) {
                str += '<div class="gp-contact">';
                str += '<p>';
                if (item === 'email') {
                    str += '<a href="mailto:' + contactInfo[item] + '">';
                    str += contactInfo[item];
                    str += '</a>';
                } else if (item.toLowerCase() === 'resume' || contactInfo[item].toLowerCase().indexOf('http') > -1 || item.toLowerCase() === 'http://GRZEGORZPAWLIK.com') {
                    str += '<a href="' + contactInfo[item] + '" target="_blank">';
                    str += item;
                    str += '</a>';
                } else {
                    str += contactInfo[item];
                }
                str += '</p>';
                str += '</div>';
            }
            str += '</div>';

            document.body.innerHTML += str;
        },

        _addTechnologies: function() {
            var techs = _seed.tech,
                str = '';

            str += '<div class="gp-module gp-professional-technologies">';
            str += this._createTitle('Technology');
            for (tech in techs) {
                str += '<h3>' + tech + '</h3>';
                str += this._addList(techs[tech]);
            }
            str += '</div>';

            document.body.innerHTML += str;
        },

        _addExperience: function() {
            var xp = _seed.xp.professional,
                xpLen = xp.length,
                str = '',
                i = 0;

            str += '<div class="gp-module gp-experience">';
            str += this._createTitle('Experience');
            str += '<ul class="gp-list">';
            for (i = 0; i < xpLen; i++) {
                str += '<li>';
                str += '<h3>' + xp[i].role + '</h3>';
                str += '<p>' + xp[i].company + '</p>';
                str += '<p>' + xp[i].description + '</p>';
                str += '<p>' + xp[i].date + '</p>';
                str += this._addList(xp[i].clients);
                str += this._addList(xp[i].tools);
                str += '</li>';
            }
            str += '</ul>';
            str += '</div>';

            document.body.innerHTML += str;
        },

        _addProfessionalReferences: function() {
            var refs = _seed.refs.professional,
                refsLen = refs.length,
                i = 0,
                str = '';

            str += '<div class="gp-module gp-professional-references">';
            str += this._createTitle('Professional References');
            for (i = 0; i < refsLen; i++) {
                str += '<p>' + refs[i].name + '</p>';
                str += '<p>' + refs[i].role + '</p>';
                str += '<p>' + refs[i].email + '</p>';
                str += '<br>';
            };
            str += '</div>';

            document.body.innerHTML += str;
        },

        _addEducation: function() {
            var edu = _seed.edu,
                eduLen = edu.length,
                i = 0,
                item, str = '';

            str += '<div class="gp-module gp-education">';
            str += this._createTitle('Education');            
            str += '<ul class="gp-list">';
            for (i = 0; i < eduLen; i++) {
                str += '<li>';
                for (item in edu[i]) {
                    str += '<p>' + edu[i][item] + '</p>';
                }
                str += '</li>';
            }
            str += '</ul>';                        
            str += '</div>';

            document.body.innerHTML += str;
        },

        _addProjects: function() {
            var recentProjects = _seed.projects.recentProjects,
                item, str = '';

            str += '<div class="gp-module gp-recentProjects">';
            str += this._createTitle('Featured Projects');
            str += '<ul class="gp-list">';
            for (item in recentProjects) {
                str += '<li><a href="' + recentProjects[item] + '" target="_blank">' + item + '</a></li>';
            }
            str += '</ul>';
            str += '</div>';
            document.body.innerHTML += str;
        },

        _createTitle: function(title) {
            return '<h2>' + title + '</h2>';
        },

        _addList: function(collection) {
            var item, str = '';
            //if (collection) collection.sort();
            str += '<ul class="gp-list">';
            for (item in collection) {
                str += '<li>' + collection[item] + '</li>';
            }
            str += '</ul>';
            return str;
        }

    };

    return {
        addAllModules: function() {
            var i;
            for (var i = 0; i < _modulesLen; i++) {
                this.addModuleByName(_modules[i]);
            };
        },

        addModuleByName: function(name) {
            _pFuncs['_add' + name]();
        },

        destroy: function() {
            var els = document.querySelectorAll('.gp-module'),
                elsLen = els.length;
            for (var i = 0; i < elsLen; i++) {
                els[i].parentNode.removeChild(els[i]);
            }
        }
    };
};

/**
 * Entry point
 */
document.addEventListener('DOMContentLoaded', function() {
    var seed = GRZEGORZPAWLIK.Developer.Seed,
        gp = new GRZEGORZPAWLIK.Developer.Resume(seed);
    gp.addAllModules();
});