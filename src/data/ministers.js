const data = {
  ministries: [
    {
      name: 'Ministry of Justice',
      minister: 'Abubakar Malami',
      origin: 'Kebbi State',
      address:
        'Federal Ministry of Justice, Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way, Central Area, Abuja. Federal Capital Territory. Nigeria.',
      website: 'www.justice.gov.ng',
    },
    {
      name: 'Ministry of Transportation',
      minister: 'Rotimi Amaechi',
      origin: 'Rivers State',
      ministerOfState: {
        minister: 'Gbemisola Saraki',
        origin: 'Kwara State',
      },
      address:
        'Federal Ministry of Transportation Bukar Dipcharma Central Business District FCT-Abuja Nigeria',
      website: 'www.transport.gov.ng',
    },
    {
      name: 'Ministry for Foreign Affairs',
      minister: 'Charles Onyeama',
      origin: 'Kaduna State',
      ministerOfState: {
        minister: 'Zubair Dada',
        origin: 'Niger State',
      },
      address:
        'Central Business Area, P.M.B. 251 Amadu Bello Way Garki, Abuja FCT, Nigeria',
      website: 'www.foreignaffairs.gov.ng',
    },
    {
      name: 'Ministry of Finance, Budget and National Planning',
      minister: 'Zainab Ahmad',
      origin: 'Enugu State',
      ministerOfState: {
        minister: 'Clement Agba',
        origin: 'Edo State',
      },
      address:
        'Tafawa Balewa building, Federal Secretariat, CBD, Abuja, Nigeria',
      website: 'www.finance.gov.ng',
    },
    {
      name: 'Ministry of Education',
      minister: 'Adamu Adamu',
      origin: 'Enugu State',
      ministerOfState: {
        minister: 'Chukwuemeka Nwajiuba',
        origin: 'Imo State',
      },
      address:
        'Block 5A (8th Floor), Federal Secretariat Complex, Shehu Shagari Way, Central Area, P.M.B. 146, Garki, Abuja.',
      website: 'www.education.gov.ng',
    },
    {
      name: 'Ministry of Information and Culture',
      minister: 'Lai Mohammed',
      origin: 'Kwara State',
      address:
        'Federal Ministry of Information and Culture, Radio House, Area 11, GarkiFCT, Abuja',
      website: 'www.fmic.gov.ng',
    },
    {
      name: 'Ministry of Defence',
      minister: 'Bashir Salihi Magashi',
      origin: 'Sokoto State',
      address: 'Ministry of Defence, By Ship House, Area 10 - Abuja, Nigeria',
      website: 'www.defence.gov.ng',
    },
    {
      name: 'Ministry of Federal Capital Territory',
      minister: 'Mohammed Musa Bello',
      origin: 'Yola State',
      ministerOfState: {
        minister: 'Ramatu Tijani',
        origin: 'Kogi State',
      },
      address:
        'Plot 2, Kapital Street, Area 11, Garki. PMB 24 FCT Abuja, Nigeria Abuja FCT 00234 Nigeria',
      website: 'www.fcta.gov.ng',
    },
    {
      name: 'Ministry of Science and Technology',
      minister: 'Ogbonnaya Onu',
      origin: 'Ebonyi State',
      ministerOfState: {
        minister: 'Mohammed Abdullahi',
        origin: 'Gombe State',
      },
      address:
        'Block D, 4th - 7th Floor, Federal Secretariat Complex (Phase II) , Shehu Shagari Way, FCT, Abuja',
      website: 'www.scienceandtech.gov.ng',
    },
    {
      name: 'Ministry of Mines and Steel Development',
      minister: 'Olamilekan Adegbite',
      origin: 'Ogun State',
      ministerOfState: {
        minister: 'Uchechukwu Sampson Ogah',
        origin: 'Abia State',
      },
      address:
        '#2, Luanda Crescent, off Adetokunbo Ademola Crescent,Wuse II, Abuja, F.C.T., Nigeria',
      website: 'www.minesandsteel.gov.ng',
    },
    {
      name: 'Ministry of Interior',
      minister: 'Rauf Aregbesola',
      origin: 'Osun State',
      address: 'Old Secretariat Area l Garki Abuja FCT Abuja +234 Nigeria',
      website: 'www.interior.gov.ng',
    },
    {
      name: 'Ministry of Works and Housing',
      minister: 'Babatunde Raji Fashola',
      origin: 'Lagos State',
      ministerOfState: {
        minister: 'Abubakar D. Aliyu',
        origin: 'Yobe State',
      },
      address:
        'Federal Ministry of Works and Housing Headquarters, Mabushi, Abuja.',
      website: 'www.worksandhousing.gov.ng',
    },
    {
      name: 'Ministry of Agriculture and Rural Development',
      minister: 'Sabo Nanono',
      origin: 'Kano State',
      ministerOfState: {
        minister: 'Mustapha Baba Shehuri',
        origin: 'Borno State',
      },
      address: 'Kapital Road, Area 11, Abuja Nigeria',
      website: 'www.fmard.gov.ng',
    },
    {
      name: 'Ministry of Power',
      minister: 'Saleh Mamman',
      origin: 'Taraba State',
      ministerOfState: {
        minister: 'Goddy Jedy Agba',
        origin: 'Cross Rivers State',
      },
      address: 'POWER HOUSE, Plot 14, Zambezi Crescent, Maitama, Abuja.',
      website: 'www.power.gov.ng',
    },
    {
      name: 'Ministry of Health',
      minister: 'Osagie Ehanire',
      origin: 'Warri State',
      ministerOfState: {
        minister: 'Adeleke Mamora',
        origin: 'Lagos State',
      },
      address:
        'New Federal Secretariat Complex, Ahmadu Bello Way, Phase III, Abuja',
      website: 'www.health.gov.ng',
    },
    {
      name: 'Ministry of Women Affairs',
      minister: 'Pauline Kedem Tellen',
      origin: 'Plateau State',
      address: 'Shehu Shagari Way Central Business Dis, Abuja. Nigeria',
      website: 'www.womenaffairs.gov.ng',
    },
    {
      name: 'Ministry of Niger Delta',
      minister: 'Godswill Obot Akpabio',
      origin: 'Akwa Ibom State',
      ministerOfState: {
        minister: 'Tayo Alasoadura',
        origin: 'Ondo State',
      },
      address: '11th Floor Federal Secretariat, Abuja, FCT, Nigeria',
      website: 'www.nigerdelta.gov.ng',
    },
    {
      name: 'Ministry of Environment',
      minister: 'Muhammad Mahmood',
      origin: 'Kaduna State',
      ministerOfState: {
        minister: 'Sharon Ikeazor',
        origin: ' Lagos State',
      },
      address: 'Federal Ministry of Environment Headquarters, Mabushi, Abuja.',
      website: 'www.environment.gov.ng',
    },
    {
      name: 'Ministry of Water Resources',
      minister: 'Suleiman Adamu',
      origin: 'Nasarawa State',
      address: 'Old Secretariat Garki, PMB 159, Area 1, Abuja Nigeria',
      website: 'www.waterresources.gov.ng',
    },
    {
      name: 'Ministry of Youth and Sports',
      minister: 'Sunday Dare',
      origin: 'Jos State',
      address:
        'Federal Ministry of Youth and Sports Development New Federal Secretariat Complex, Phase II, Block D (2nd Floor), Shehu Shagari Way, P.M.B 279, Garki-Abuja.',
      website: 'www.youthandsport.gov.ng',
    },
    {
      name: 'Ministry of Aviation',
      minister: 'Sirika Hadi',
      origin: 'Katsina State',
      address:
        'Nnamdi Azikiwe International Airport, Federal Capital Territory, Abuja',
      website: 'www.ncaa.gov.ng',
    },
    {
      name: 'Ministry of Labour and Employment',
      minister: 'Chris Ngige',
      origin: 'Anambra State',
      ministerOfState: {
        minister: 'Festus Keyamo',
        origin: 'Delta State',
      },
      address:
        'Block 4A (2nd Floor) Federal Secretariat Complex, Shehu Shagari Way, P.M.B.04, Central Area, Abuja',
      website: 'www.labour.gov.ng',
    },
    {
      name: 'Ministry of for Petroleum',
      minister: 'President Muhammadu Buhari',
      origin: 'Katsina State',
      ministerOfState: {
        minister: 'Timipre Sylva',
        origin: 'Bayelsa State',
      },
      address:
        'Block D, NNPC Towers, Herbert Macaulay way,Central Business District, Abuja',
      website: 'www.petroleumresources.gov.ng',
    },
    {
      name: 'Ministry of Police Affairs',
      minister: 'Maigari Dingyadi',
      origin: 'Sokoto State',
      address:
        '10th & 11 Floor, Federal Secretariat complex, Phase 3, Shehu Shagari Way, Maitama, Abuja Nigeria',
      website: 'www.policeaffairs.gov.ng',
    },
    {
      name: 'Ministry of Communication',
      minister: 'Isa Ali Ibrahim (Pantami) ',
      origin: 'Gombe State',
      address:
        'Federal Ministry of Communications and Digital Economy, P.M.B. 12578, Federal Secretariat Complex Phase I, Annex III, Shehu Shagari Way Abuja FCT',
      website: 'www.commtech.gov.ng',
    },
    {
      name: 'Ministry of Industry, Trade and Investment',
      minister: 'Richard Adeniyi Adebayo',
      origin: 'Ekiti State',
      ministerOfState: {
        minister: 'Mariam Katagum',
        origin: 'Bauchi State',
      },
      address: 'OLD FEDERAL SECETARIAT, AREA 1, GARKI, FCT NIGERIA',
      website: 'www.fmiti.gov.ng',
    },
    {
      name:
        'Ministry of Humanitarian Affairs, Disaster Management and Social Development',
      minister: 'Sadiya Umar Faruk',
      origin: 'Zamfara State',
      address:
        'Phase 1, 6th Floor, Federal Secretariat Complex, Shehu Shagari Way, Central Area, Abuja Nigeria',
      website: 'www.fmhds.gov.ng',
    },
    {
      name: 'Ministry of Special Duties and International Affairs',
      minister: 'George Akume',
      origin: 'Benue State',
      address:
        'Phase 1, 6th Floor, Federal Secretariat Complex, Shehu Shagari Way, Central Area, Abuja Nigeria',
      website: 'www.nigeria.gov.ng',
    },
  ],
};

export default data;
