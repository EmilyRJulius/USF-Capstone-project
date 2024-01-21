"""Application routes."""
from datetime import datetime

from flask import current_app as app
from flask import make_response, redirect, render_template, request, url_for, jsonify

from . models import User, db, Character

def convert_keys_to_underscore(data):
    if isinstance(data, list):
        return [convert_keys_to_underscore(item) for item in data]
    elif isinstance(data, dict):
        return {convert_key(key): convert_keys_to_underscore(value) for key, value in data.items()}
    else:
        return data

def convert_key(key):
    return key.replace('-', '_')

# @app.route("/", methods=["GET"])




@app.route("/signup", methods=["GET", "POST"])
def signup():
    """Create a user via query string parameters."""
    data = request.get_json()

    username = data.get('user').get('username')
    password = data.get('user').get('password')

    new_user = User(
            username=username,
            password=password,
            admin=False
        )
    db.session.add(new_user)  # Adds new User record to database
    db.session.commit()

    # if username:
    #     existing_user = User.query.filter(User.username == username).first()
    #     if existing_user:
    #         return jsonify(f"{username} already created!")
    #     new_user = User(
    #         username=username,
    #         password=password,
    #         admin=False,
    #     )  # Create an instance of the User class
    #     db.session.add(new_user)  # Adds new User record to database
    #     db.session.commit()  # Commits all changes
    #     # redirect(url_for("home"))
    return jsonify({'message': f'{username} created' })

@app.route("/login", methods=["GET", "POST"])
def login():
    data = request.get_json()

    username = data.get('loginUser').get('login_username')
    password = data.get('loginUser').get('login_password')

    # Check if username and password match
    if username in users and users[username] == password:
        curr_user = users[username].id
        redirect(url_for('characters_list'))
        return jsonify({'message': 'Login successful'}, curr_user)
    else:
        return jsonify({'message': 'Invalid credentials'}), 401


@app.route("/<int:user_id>/characters", methods=["GET"])
def characters_list(user_id):
    user = User.query.get_or_404(user_id)
    characters = (Character.query(Character.name, Character.id).filter(Character.user_id == user_id).all())
    return jsonify(characters, user)

@app.route("/<int:user_id>/<int:character_id>", methods=["GET", "POST", "PUT"])
def character_sheet(user_id, character_id):
    user = User.query.get_or_404(user_id)
    character = Character.query.get_or_404((character_id, user_id))
    partial_data = request.json

    partial_data = convert_keys_to_underscore(partial_data)

    existing_data = session.get(Character, character_id, user_id)
    existing_data.update(partial_data)

    characters_db[(character_id, user_id)] = existing_data
    return jsonify(character, user)

@app.route("/create-character", methods=["POST", "PUT"])
def new_character():
    data = request.get_json()

    name = data.get('header').get('name')
    player = data.get('header').get('player')
    campaign = data.get('header').get('campaign')
    char_class = data.get('header').get('char_class')
    subclass = data.get('header').get('subclass')
    race = data.get('header').get('race')
    deity = data.get('header').get('deity')
    alignment = data.get('header').get('alignment')
    level = data.get('header').get('level')
    proficiency = data.get('abilities').get('proficiency')
    cha_Score = data.get('abilities').get('cha_Score')
    cha_Modifier = data.get('abilities').get('cha_Modifier')
    cha_Save = data.get('abilities').get('cha_Save')
    con_Score = data.get('abilities').get('con_Score')
    con_Modifier = data.get('abilities').get('con_Modifier')
    con_Save = data.get('abilities').get('con_Save')
    dex_Score = data.get('abilities').get('dex_Score')
    dex_Modifier = data.get('abilities').get('dex_Modifier')
    dex_Save = data.get('abilities').get('dex_Save')
    int_Score = data.get('abilities').get('int_Score')
    int_Modifier = data.get('abilities').get('int_Modifier')
    int_Save = data.get('abilities').get('int_Save')
    wis_Score = data.get('abilities').get('wis_Score')
    wis_Modifier = data.get('abilities').get('wis_Modifier')
    wis_Save = data.get('abilities').get('wis_Save')
    str_Score = data.get('abilities').get('str_Score')
    str_Modifier = data.get('abilities').get('str_Modifier')
    str_Save = data.get('abilities').get('str_Save')
    deception = data.get('abilities').get('deception')
    intimidation = data.get('abilities').get('intimidation')
    performance = data.get('abilities').get('performance')
    persuasion = data.get('abilities').get('persuasion')
    acrobatics = data.get('abilities').get('acrobatics')
    sleight_of_hand = data.get('abilities').get("sleight-of-hand")
    stealth = data.get('abilities').get('stealth')
    arcana = data.get('abilities').get('arcana')
    history = data.get('abilities').get('history')
    investigation = data.get('abilities').get('investigation')
    nature = data.get('abilities').get('nature')
    religion = data.get('abilities').get('religion')
    animal_handling = data.get('abilities').get("animal-handling")
    insight = data.get('abilities').get('insight')
    medicine = data.get('abilities').get('medicine')
    perception = data.get('abilities').get('perception')
    survival = data.get('abilities').get('survival')
    athletics = data.get('abilities').get('athletics')
    Other_prof = data.get('abilities').get('Other_prof')
    hp = data.get('HP').get('hp')
    ac = data.get('HP').get('ac')
    Initiative = data.get('HP').get('Initiative')
    TempHP = data.get('HP').get('TempHP')
    MaxHP = data.get('HP').get('MaxHP')
    HitDice = data.get('HP').get('HitDice')
    weapon1 = data.get('equipment').get('weapon1')
    attack1 = data.get('equipment').get('attack1')
    damage1 = data.get('equipment').get('damage1')
    weapon2 = data.get('equipment').get('weapon2')
    attack2 = data.get('equipment').get('attack2')
    damage2 = data.get('equipment').get('damage2')
    weapon3 = data.get('equipment').get('weapon3')
    attack3 = data.get('equipment').get('attack3')
    damage3 = data.get('equipment').get('damage3')
    weapon4 = data.get('equipment').get('weapon4')
    attack4 = data.get('equipment').get('attack4')
    damage4 = data.get('equipment').get('damage4')
    weapon5 = data.get('equipment').get('weapon5')
    attack5 = data.get('equipment').get('attack5')
    damage5 = data.get('equipment').get('damage4')
    name1 = data.get('equipment').get('name1')
    weight1 = data.get('equipment').get('weight1')
    location1 = data.get('equipment').get('location1')
    worth1 = data.get('equipment').get('worth1')
    name2 = data.get('equipment').get('name2')
    weight2 = data.get('equipment').get('weight2')
    location2 = data.get('equipment').get('location2')
    worth2 = data.get('equipment').get('worth2')
    name3 = data.get('equipment').get('name3')
    weight3 = data.get('equipment').get('weight3')
    location3 = data.get('equipment').get('location3')
    worth3 = data.get('equipment').get('worth3')
    name4 = data.get('equipment').get('name4')
    weight4 = data.get('equipment').get('weight4')
    location4 = data.get('equipment').get('location4')
    worth4 = data.get('equipment').get('worth4')
    name5 = data.get('equipment').get('name5')
    weight5 = data.get('equipment').get('weight5')
    location5 = data.get('equipment').get('location5')
    worth5 = data.get('equipment').get('worth5')
    copper = data.get('equipment').get('copper')
    silver = data.get('equipment').get('silver')
    electrum = data.get('equipment').get('electrum')
    gold = data.get('equipment').get('gold')
    platinum = data.get('equipment').get('platinum')
    passive_perception = data.get('exploration').get('passive_perception')
    speed = data.get('exploration').get('speed')
    overland_mph = data.get('exploration').get('overland_mph')
    overland_mpd = data.get('exploration').get('overland_mpd')
    personality = data.get('charPersonality').get('personality')
    ideals = data.get('charPersonality').get('ideals')
    bonds = data.get('charPersonality').get('bonds')
    flaws = data.get('charPersonality').get('flaws')
    features_traits = data.get('charPersonality').get('features_traits')
    casting_ability = data.get('spells').get('casting_ability')
    save_dc = data.get('spells').get('save_dc')
    attack_bonus = data.get('spells').get('attack_bonus')
    cantrip1 = data.get('spells').get('cantrip1')
    cantrip2 = data.get('spells').get('cantrip2')
    cantrip3 = data.get('spells').get('cantrip3')
    cantrip4 = data.get('spells').get('cantrip4')
    cantrip5 = data.get('spells').get('cantrip5')
    cantrip6 = data.get('spells').get('cantrip6')
    cantrip7 = data.get('spells').get('cantrip7')
    cantrip8 = data.get('spells').get('cantrip8')
    cantrip9 = data.get('spells').get('cantrip9')
    cantrip10 = data.get('spells').get('cantrip10')
    cantrip11 = data.get('spells').get('cantrip11')
    cantrip12 = data.get('spells').get('cantrip12')
    cantrip13 = data.get('spells').get('cantrip13')
    cantrip14 = data.get('spells').get('cantrip14')
    cantrip15 = data.get('spells').get('cantrip15')
    cantrip16 = data.get('spells').get('cantrip16')
    slots_level1 = data.get('spells').get('slots_level1')
    expended_level1 = data.get('spells').get('expended_level1')
    prepared_level1 = data.get('spells').get('prepared_level1')
    level1_spell1 = data.get('spells').get('level1_spell1')
    level1_spell2 = data.get('spells').get('level1_spell2')
    level1_spell3 = data.get('spells').get('level1_spell3')
    level1_spell4 = data.get('spells').get('level1_spell4')
    level1_spell5 = data.get('spells').get('level1_spell5')
    level1_spell6 = data.get('spells').get('level1_spell6')
    level1_spell7 = data.get('spells').get('level1_spell7')
    level1_spell8 = data.get('spells').get('level1_spell8')
    level1_spell9 = data.get('spells').get('level1_spell9')
    level1_spell10 = data.get('spells').get('level1_spell10')
    level1_spell11 = data.get('spells').get('level1_spell11')
    level1_spell12 = data.get('spells').get('level1_spell12')
    slots_level2 = data.get('spells').get('slots_level2')
    expended_level2 = data.get('spells').get('expended_level2')
    prepared_level2 = data.get('spells').get('prepared_level2')
    level2_spell1 = data.get('spells').get('level2_spell1')
    level2_spell2 = data.get('spells').get('level2_spell2')
    level2_spell3 = data.get('spells').get('level2_spell3')
    level2_spell4 = data.get('spells').get('level2_spell4')
    level2_spell5 = data.get('spells').get('level2_spell5')
    level2_spell6 = data.get('spells').get('level2_spell6')
    level2_spell7 = data.get('spells').get('level2_spell7')
    level2_spell8 = data.get('spells').get('level2_spell8')
    level2_spell9 = data.get('spells').get('level2_spell9')
    level2_spell10 = data.get('spells').get('level2_spell10')
    level2_spell11 = data.get('spells').get('level2_spell11')
    level2_spell12 = data.get('spells').get('level2_spell12')
    slots_level3 = data.get('spells').get('slots_level3')
    expended_level3 = data.get('spells').get('expended_level3')
    prepared_level3 = data.get('spells').get('prepared_level3')
    level3_spell1 = data.get('spells').get('level3_spell1')
    level3_spell2 = data.get('spells').get('level3_spell2')
    level3_spell3 = data.get('spells').get('level3_spell3')
    level3_spell4 = data.get('spells').get('level3_spell4')
    level3_spell5 = data.get('spells').get('level3_spell5')
    level3_spell6 = data.get('spells').get('level3_spell6')
    level3_spell7 = data.get('spells').get('level3_spell7')
    level3_spell8 = data.get('spells').get('level3_spell8')
    level3_spell9 = data.get('spells').get('level3_spell9')
    level3_spell10 = data.get('spells').get('level3_spell10')
    level3_spell11 = data.get('spells').get('level3_spell11')
    level3_spell12 = data.get('spells').get('level3_spell12')
    slots_level4 = data.get('spells').get('slots_level4')
    expended_level4 = data.get('spells').get('expended_level4')
    prepared_level4 = data.get('spells').get('prepared_level4')
    level4_spell1 = data.get('spells').get('level4_spell1')
    level4_spell2 = data.get('spells').get('level4_spell2')
    level4_spell3 = data.get('spells').get('level4_spell3')
    level4_spell4 = data.get('spells').get('level4_spell4')
    level4_spell5 = data.get('spells').get('level4_spell5')
    level4_spell6 = data.get('spells').get('level4_spell6')
    level4_spell7 = data.get('spells').get('level4_spell7')
    level4_spell8 = data.get('spells').get('level4_spell8')
    level4_spell9 = data.get('spells').get('level4_spell9')
    level4_spell10 = data.get('spells').get('level4_spell10')
    level4_spell11 = data.get('spells').get('level4_spell11')
    level4_spell12 = data.get('spells').get('level4_spell12')
    slots_level5 = data.get('spells').get('slots_level5')
    expended_level5 = data.get('spells').get('expended_level5')
    prepared_level5 = data.get('spells').get('prepared_level5')
    level5_spell1 = data.get('spells').get('level5_spell1')
    level5_spell2 = data.get('spells').get('level5_spell2')
    level5_spell3 = data.get('spells').get('level5_spell3')
    level5_spell4 = data.get('spells').get('level5_spell4')
    level5_spell5 = data.get('spells').get('level5_spell5')
    level5_spell6 = data.get('spells').get('level5_spell6')
    level5_spell7 = data.get('spells').get('level5_spell7')
    level5_spell8 = data.get('spells').get('level5_spell8')
    level5_spell9 = data.get('spells').get('level5_spell9')
    level5_spell10 = data.get('spells').get('level5_spell10')
    level5_spell11 = data.get('spells').get('level5_spell11')
    level5_spell12 = data.get('spells').get('level5_spell12')
    slots_level6 = data.get('spells').get('slots_level6')
    expended_level6 = data.get('spells').get('expended_level6')
    prepared_level6 = data.get('spells').get('prepared_level6')
    level6_spell1 = data.get('spells').get('level6_spell1')
    level6_spell2 = data.get('spells').get('level6_spell2')
    level6_spell3 = data.get('spells').get('level6_spell3')
    level6_spell4 = data.get('spells').get('level6_spell4')
    level6_spell5 = data.get('spells').get('level6_spell5')
    level6_spell6 = data.get('spells').get('level6_spell6')
    level6_spell7 = data.get('spells').get('level6_spell7')
    level6_spell8 = data.get('spells').get('level6_spell8')
    level6_spell9 = data.get('spells').get('level6_spell9')
    level6_spell10 = data.get('spells').get('level6_spell10')
    level6_spell11 = data.get('spells').get('level6_spell11')
    level6_spell12 = data.get('spells').get('level6_spell12')
    slots_level7 = data.get('spells').get('slots_level7')
    expended_level7 = data.get('spells').get('expended_level7')
    prepared_level7 = data.get('spells').get('prepared_level7')
    level7_spell1 = data.get('spells').get('level7_spell1')
    level7_spell2 = data.get('spells').get('level7_spell2')
    level7_spell3 = data.get('spells').get('level7_spell3')
    level7_spell4 = data.get('spells').get('level7_spell4')
    level7_spell5 = data.get('spells').get('level7_spell5')
    level7_spell6 = data.get('spells').get('level7_spell6')
    level7_spell7 = data.get('spells').get('level7_spell7')
    level7_spell8 = data.get('spells').get('level7_spell8')
    level7_spell9 = data.get('spells').get('level7_spell9')
    level7_spell10 = data.get('spells').get('level7_spell10')
    level7_spell11 = data.get('spells').get('level7_spell11')
    level7_spell12 = data.get('spells').get('level7_spell12')
    slots_level8 = data.get('spells').get('slots_level8')
    expended_level8 = data.get('spells').get('expended_level8')
    prepared_level8 = data.get('spells').get('prepared_level8')
    level8_spell1 = data.get('spells').get('level8_spell1')
    level8_spell2 = data.get('spells').get('level8_spell2')
    level8_spell3 = data.get('spells').get('level8_spell3')
    level8_spell4 = data.get('spells').get('level8_spell4')
    level8_spell5 = data.get('spells').get('level8_spell5')
    level8_spell6 = data.get('spells').get('level8_spell6')
    level8_spell7 = data.get('spells').get('level8_spell7')
    level8_spell8 = data.get('spells').get('level8_spell8')
    level8_spell9 = data.get('spells').get('level8_spell9')
    level8_spell10 = data.get('spells').get('level8_spell10')
    level8_spell11 = data.get('spells').get('level8_spell11')
    level8_spell12 = data.get('spells').get('level8_spell12')
    slots_level9 = data.get('spells').get('slots_level9')
    expended_level9 = data.get('spells').get('expended_level9')
    prepared_level9 = data.get('spells').get('prepared_level9')
    level9_spell1 = data.get('spells').get('level9_spell1')
    level9_spell2 = data.get('spells').get('level9_spell2')
    level9_spell3 = data.get('spells').get('level9_spell3')
    level9_spell4 = data.get('spells').get('level9_spell4')
    level9_spell5 = data.get('spells').get('level9_spell5')
    level9_spell6 = data.get('spells').get('level9_spell6')
    level9_spell7 = data.get('spells').get('level9_spell7')
    level9_spell8 = data.get('spells').get('level9_spell8')
    level9_spell9 = data.get('spells').get('level9_spell9')
    level9_spell10 = data.get('spells').get('level9_spell10')
    level9_spell11 = data.get('spells').get('level9_spell11')
    level9_spell12 = data.get('spells').get('level9_spell12')
    height = data.get('description').get('height')
    weight = data.get('description').get('weight')
    age = data.get('description').get('age')
    gender = data.get('description').get('gender')
    hair = data.get('description').get('hair')
    eyes = data.get('description').get('eyes')
    skin = data.get('description').get('skin')
    language1 = data.get('languages').get('language1')
    language2 = data.get('languages').get('language2')
    language3 = data.get('languages').get('language3')
    language4 = data.get('languages').get('language4')
    language5 = data.get('languages').get('language5')
    language6 = data.get('languages').get('language6')
    language7 = data.get('languages').get('language7')
    language8 = data.get('languages').get('language8')
    language9 = data.get('languages').get('language9')
    language10 = data.get('languages').get('language10')
    language11 = data.get('languages').get('language11')
    language12 = data.get('languages').get('language12')
    language13 = data.get('languages').get('language13')
    language14 = data.get('languages').get('language14')
    language15 = data.get('languages').get('language15')
    language16 = data.get('languages').get('language16')
    language17 = data.get('languages').get('language17')
    language18 = data.get('languages').get('language18')
    subclass_features = data.get('extras').get('subclass_features')
    extra_equipment = data.get('extras').get('extra_equipment')
    contact_friends = data.get('extras').get('contacts_friends')
    enemies = data.get('extras').get('enemies')
    backstory = data.get('extras').get('backstory')
    session_notes = data.get('extras').get('session_notes')
    user_id = data.get('user_id')
    print(data)
    new_character = Character(
        name = name,
        player = player,
        campaign = campaign,
        char_class = char_class,
        subclass = subclass,
        race = race,
        deity =  deity,
        alignment = alignment,
        level = level,
        proficiency = proficiency,
        cha_Score = cha_Score,
        cha_Modifier = cha_Modifier,
        cha_Save = cha_Save,
        con_Score = con_Score,
        con_Modifier = con_Modifier,
        con_Save = con_Save,
        dex_Score = dex_Score,
        dex_Modifier = dex_Modifier,
        dex_Save = dex_Save,
        int_Score = int_Score,
        int_Modifier = int_Modifier,
        int_Save = int_Save,
        wis_Score = wis_Score,
        wis_Modifier = wis_Modifier,
        wis_Save = wis_Save,
        str_Score = str_Score,
        str_Modifier = str_Modifier,
        str_Save = str_Save,
        deception = deception,
        intimidation = intimidation,
        performance = performance,
        persuasion = persuasion,
        acrobatics = acrobatics,
        sleight_of_hand = sleight_of_hand,
        stealth = stealth,
        arcana = arcana,
        history = history,
        investigation = investigation,
        nature = nature,
        religion = religion,
        animal_handling = animal_handling,
        insight = insight,
        medicine = medicine,
        perception = perception,
        survival = survival,
        athletics = athletics,
        Other_prof = Other_prof,
        hp = hp,
        ac = ac,
        Initiative = Initiative,
        TempHP = TempHP,
        MaxHP = MaxHP,
        HitDice = HitDice,
        weapon1 = weapon1,
        attack1 = attack1,
        damage1 = damage1,
        weapon2 = weapon2,
        attack2 = attack2,
        damage2 = damage2,
        weapon3 = weapon3,
        attack3 = attack3,
        damage3 = damage3,
        weapon4 = weapon4,
        attack4 = attack4,
        damage4 = damage4,
        weapon5 = weapon5,
        attack5 = attack5,
        damage5 = damage5,
        name1 = name1,
        weight1 =weight1,
        location1 = location1,
        worth1 = worth1,
        name2 = name2,
        weight2 = weight2,
        location2 = location2,
        worth2 = worth2,
        name3 = name3,
        weight3 = weight3,
        location3 = location3,
        worth3 = worth3,
        name4 = name4,
        weight4 = weight4,
        location4 = location4,
        worth4 = worth4,
        name5 = name5,
        weight5 = weight5,
        location5 = location5,
        worth5 = worth5,
        copper = copper,
        silver = silver,
        electrum = electrum,
        gold = gold,
        platinum = platinum,
        passive_perception = passive_perception,
        speed = speed,
        overland_mph = overland_mph,
        overland_mpd = overland_mpd,
        personality = personality,
        ideals = ideals,
        bonds = bonds,
        flaws = flaws,
        features_traits = features_traits,
        casting_ability = casting_ability,
        save_dc = save_dc,
        attack_bonus = attack_bonus,
        cantrip1 = cantrip1,
        cantrip2 = cantrip2,
        cantrip3 = cantrip3,
        cantrip4 = cantrip4,
        cantrip5 = cantrip5,
        cantrip6 = cantrip6,
        cantrip7 = cantrip7,
        cantrip8 = cantrip8,
        cantrip9 = cantrip9,
        cantrip10 = cantrip10,
        cantrip11 = cantrip11,
        cantrip12 = cantrip12,
        cantrip13 = cantrip13,
        cantrip14 = cantrip14,
        cantrip15 = cantrip15,
        cantrip16 = cantrip16,
        slots_level1 = slots_level1,
        expended_level1 = expended_level1,
        prepared_level1 = prepared_level1,
        level1_spell1 = level1_spell1,
        level1_spell2 = level1_spell2,
        level1_spell3 = level1_spell3,
        level1_spell4 = level1_spell4,
        level1_spell5 = level1_spell5,
        level1_spell6 = level1_spell6,
        level1_spell7 = level1_spell7,
        level1_spell8 = level1_spell8,
        level1_spell9 = level1_spell9,
        level1_spell10 = level1_spell10,
        level1_spell11 = level1_spell11,
        level1_spell12 = level1_spell12,
        slots_level2 = slots_level2,
        expended_level2 = expended_level2,
        prepared_level2 = prepared_level2,
        level2_spell1 = level2_spell1,
        level2_spell2 = level2_spell2,
        level2_spell3 = level2_spell3,
        level2_spell4 = level2_spell4,
        level2_spell5 = level2_spell5,
        level2_spell6 = level2_spell6,
        level2_spell7 = level2_spell7,
        level2_spell8 = level2_spell8,
        level2_spell9 = level2_spell9,
        level2_spell10 = level2_spell10,
        level2_spell11 = level2_spell11,
        level2_spell12 = level2_spell12,
        slots_level3 = slots_level3,
        expended_level3 = expended_level3,
        prepared_level3 = prepared_level3,
        level3_spell1 = level3_spell1,
        level3_spell2 = level3_spell2,
        level3_spell3 = level3_spell3,
        level3_spell4 = level3_spell4,
        level3_spell5 = level3_spell5,
        level3_spell6 = level3_spell6,
        level3_spell7 = level3_spell7,
        level3_spell8 = level3_spell8,
        level3_spell9 = level3_spell9,
        level3_spell10 = level3_spell10,
        level3_spell11 = level3_spell11,
        level3_spell12 = level3_spell12,
        slots_level4 = slots_level4,
        expended_level4 = expended_level4,
        prepared_level4 = prepared_level4,
        level4_spell1 = level4_spell1,
        level4_spell2 = level4_spell2,
        level4_spell3 = level4_spell3,
        level4_spell4 = level4_spell4,
        level4_spell5 = level4_spell5,
        level4_spell6 = level4_spell6,
        level4_spell7 = level4_spell7,
        level4_spell8 = level4_spell8,
        level4_spell9 = level4_spell9,
        level4_spell10 = level4_spell10,
        level4_spell11 = level4_spell11,
        level4_spell12 = level4_spell12,
        slots_level5 = slots_level5,
        expended_level5 = expended_level5,
        prepared_level5 = prepared_level5,
        level5_spell1 = level5_spell1,
        level5_spell2 = level5_spell2,
        level5_spell3 = level5_spell3,
        level5_spell4 = level5_spell4,
        level5_spell5 = level5_spell5,
        level5_spell6 = level5_spell6,
        level5_spell7 = level5_spell7,
        level5_spell8 = level5_spell8,
        level5_spell9 = level5_spell9,
        level5_spell10 = level5_spell10,
        level5_spell11 = level5_spell11,
        level5_spell12 = level5_spell12,
        slots_level6 = slots_level6,
        expended_level6 = expended_level6,
        prepared_level6 = prepared_level6,
        level6_spell1 = level6_spell1,
        level6_spell2 = level6_spell2,
        level6_spell3 = level6_spell3,
        level6_spell4 = level6_spell4,
        level6_spell5 = level6_spell5,
        level6_spell6 = level6_spell6,
        level6_spell7 = level6_spell7,
        level6_spell8 = level6_spell8,
        level6_spell9 = level6_spell9,
        level6_spell10 = level6_spell10,
        level6_spell11 = level6_spell11,
        level6_spell12 = level6_spell12,
        slots_level7 = slots_level7,
        expended_level7 = expended_level7,
        prepared_level7 = prepared_level7,
        level7_spell1 = level7_spell1,
        level7_spell2 = level7_spell2,
        level7_spell3 = level7_spell3,
        level7_spell4 = level7_spell4,
        level7_spell5 = level7_spell5,
        level7_spell6 = level7_spell6,
        level7_spell7 = level7_spell7,
        level7_spell8 = level7_spell8,
        level7_spell9 = level7_spell9,
        level7_spell10 = level7_spell10,
        level7_spell11 = level7_spell11,
        level7_spell12 = level7_spell12,
        slots_level8 = slots_level8,
        expended_level8 = expended_level8,
        prepared_level8 = prepared_level8,
        level8_spell1 = level8_spell1,
        level8_spell2 = level8_spell2,
        level8_spell3 = level8_spell3,
        level8_spell4 = level8_spell4,
        level8_spell5 = level8_spell5,
        level8_spell6 = level8_spell6,
        level8_spell7 = level8_spell7,
        level8_spell8 = level8_spell8,
        level8_spell9 = level8_spell9,
        level8_spell10 = level8_spell10,
        level8_spell11 = level8_spell11,
        level8_spell12 = level8_spell12,
        slots_level9 = slots_level9,
        expended_level9 = expended_level9,
        prepared_level9 = prepared_level9,
        level9_spell1 = level9_spell1,
        level9_spell2 = level9_spell2,
        level9_spell3 = level9_spell3,
        level9_spell4 = level9_spell4,
        level9_spell5 = level9_spell5,
        level9_spell6 = level9_spell6,
        level9_spell7 = level9_spell7,
        level9_spell8 = level9_spell8,
        level9_spell9 = level9_spell9,
        level9_spell10 = level9_spell10,
        level9_spell11 = level9_spell11,
        level9_spell12 = level9_spell12,
       height = height,
       weight = weight,
       age = age,
       gender = gender,
       hair = hair,
       eyes = eyes,
       skin = skin,
       language1 = language1,
       language2 = language2,
       language3 = language3,
       language4 = language4,
       language5 = language5,
       language6 = language6,
       language7 = language7,
       language8 = language8,
       language9 = language9,
       language10 = language10,
       language11 = language11,
       language12 = language12,
       language13 = language13,
       language14 = language14,
       language15 = language15,
       language16 = language16,
       language17 = language17,
       language18 = language18,
       subclass_features = subclass_features,
       extra_equipment = extra_equipment,
       contact_friends = contact_friends,
       enemies = enemies,
       backstory = backstory,
       session_notes = session_notes,
       user_id = user_id
    )
    db.session.add(new_character)
    db.session.commit()
    return jsonify({'message': 'Character created'})