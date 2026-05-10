const controller = {}
const contacts = require("../models/contacts.js")




controller.getByID = async function (req, res, next) {
    let id = req.params.id;
    let contact = undefined;
    try {
        contact = await contacts.getByID(id);
    } catch (error) {

    }
    if (contact != undefined) {
        res.status(200).json(contact);
    } else {
        res.sendStatus(404);
    }
}

controller.getAll = async function (req, res, next) {
    let data = await contacts.getContacts();
    res.status(200).json(data);
}

controller.insert = async function (req, res, next) {
    // const dummyData = [
    //     { firstName: "Liam", lastName: "Smith", email: "liam.smith@example.com", favoriteColor: "blue", birthday: "1990-01-15" },
    //     { firstName: "Olivia", lastName: "Johnson", email: "olivia.j@testmail.com", favoriteColor: "green", birthday: "1992-04-23" },
    //     { firstName: "Noah", lastName: "Williams", email: "n.williams88@fake.net", favoriteColor: "red", birthday: "1988-11-05" },
    //     { firstName: "Emma", lastName: "Brown", email: "emmabrown@sample.org", favoriteColor: "purple", birthday: "1995-07-12" },
    //     { firstName: "Oliver", lastName: "Jones", email: "oliver.jones@mock.com", favoriteColor: "yellow", birthday: "1985-02-28" },
    //     { firstName: "Ava", lastName: "Garcia", email: "ava.garcia@dummy.io", favoriteColor: "orange", birthday: "1998-09-14" },
    //     { firstName: "Elijah", lastName: "Martinez", email: "emartinez@test.com", favoriteColor: "black", birthday: "1991-12-01" },
    //     { firstName: "Charlotte", lastName: "Rodriguez", email: "crodriguez@fake.co", favoriteColor: "pink", birthday: "1993-08-19" },
    //     { firstName: "William", lastName: "Martinez", email: "william.m@example.net", favoriteColor: "teal", birthday: "1980-03-10" },
    //     { firstName: "Sophia", lastName: "Hernandez", email: "sophia.h@sample.io", favoriteColor: "navy", birthday: "1999-05-25" },
    //     { firstName: "James", lastName: "Lopez", email: "jameslopez@mock.org", favoriteColor: "maroon", birthday: "1987-10-30" },
    //     { firstName: "Isabella", lastName: "Gonzalez", email: "igonzalez@testmail.com", favoriteColor: "cyan", birthday: "1996-06-17" },
    //     { firstName: "Benjamin", lastName: "Wilson", email: "ben.wilson@fake.com", favoriteColor: "blue", birthday: "1994-01-22" },
    //     { firstName: "Mia", lastName: "Anderson", email: "mia.anderson@example.io", favoriteColor: "green", birthday: "1997-11-11" },
    //     { firstName: "Lucas", lastName: "Thomas", email: "lthomas@dummy.net", favoriteColor: "red", birthday: "1989-04-04" },
    //     { firstName: "Evelyn", lastName: "Taylor", email: "evelyn.t@test.org", favoriteColor: "purple", birthday: "1992-08-08" },
    //     { firstName: "Henry", lastName: "Moore", email: "henry.moore@sample.com", favoriteColor: "yellow", birthday: "1986-12-25" },
    //     { firstName: "Harper", lastName: "Jackson", email: "harperj@mock.co", favoriteColor: "orange", birthday: "1995-03-14" },
    //     { firstName: "Alexander", lastName: "Martin", email: "amartin@fake.io", favoriteColor: "black", birthday: "1990-09-09" },
    //     { firstName: "Amelia", lastName: "Lee", email: "amelia.lee@example.net", favoriteColor: "pink", birthday: "1998-02-18" },
    //     { firstName: "Michael", lastName: "Perez", email: "mperez@testmail.org", favoriteColor: "teal", birthday: "1984-07-07" },
    //     { firstName: "Abigail", lastName: "Thompson", email: "abigail.t@dummy.com", favoriteColor: "navy", birthday: "1993-10-12" },
    //     { firstName: "Daniel", lastName: "White", email: "daniel.white@sample.net", favoriteColor: "maroon", birthday: "1988-05-05" },
    //     { firstName: "Ella", lastName: "Harris", email: "ellaharris@fake.org", favoriteColor: "cyan", birthday: "1996-12-30" },
    //     { firstName: "Matthew", lastName: "Sanchez", email: "msanchez@mock.io", favoriteColor: "blue", birthday: "1991-06-21" },
    //     { firstName: "Scarlett", lastName: "Clark", email: "scarlett.c@example.com", favoriteColor: "green", birthday: "1994-08-28" },
    //     { firstName: "Jackson", lastName: "Ramirez", email: "jramirez@test.co", favoriteColor: "red", birthday: "1989-11-15" },
    //     { firstName: "Grace", lastName: "Lewis", email: "grace.lewis@dummy.org", favoriteColor: "purple", birthday: "1997-01-09" },
    //     { firstName: "Sebastian", lastName: "Robinson", email: "srobinson@sample.com", favoriteColor: "yellow", birthday: "1985-04-16" },
    //     { firstName: "Chloe", lastName: "Walker", email: "chloe.w@fake.net", favoriteColor: "orange", birthday: "1992-10-02" },
    //     { firstName: "Jack", lastName: "Young", email: "jackyoung@mock.com", favoriteColor: "black", birthday: "1990-03-27" },
    //     { firstName: "Aria", lastName: "Allen", email: "aria.allen@testmail.io", favoriteColor: "pink", birthday: "1999-07-20" },
    //     { firstName: "Owen", lastName: "King", email: "oking@example.org", favoriteColor: "teal", birthday: "1987-12-11" },
    //     { firstName: "Lily", lastName: "Wright", email: "lily.wright@dummy.com", favoriteColor: "navy", birthday: "1995-05-24" },
    //     { firstName: "Theodore", lastName: "Scott", email: "tscott@sample.net", favoriteColor: "maroon", birthday: "1986-09-03" },
    //     { firstName: "Nora", lastName: "Torres", email: "nora.torres@fake.co", favoriteColor: "cyan", birthday: "1993-02-14" },
    //     { firstName: "Aidan", lastName: "Nguyen", email: "aidan.n@mock.org", favoriteColor: "blue", birthday: "1998-11-29" },
    //     { firstName: "Zoey", lastName: "Hill", email: "zhill@test.com", favoriteColor: "green", birthday: "1991-08-05" },
    //     { firstName: "Samuel", lastName: "Flores", email: "samuel.flores@example.io", favoriteColor: "red", birthday: "1989-01-18" },
    //     { firstName: "Riley", lastName: "Green", email: "riley.g@dummy.net", favoriteColor: "purple", birthday: "1996-06-08" },
    //     { firstName: "Joseph", lastName: "Adams", email: "jadams@sample.org", favoriteColor: "yellow", birthday: "1984-10-21" },
    //     { firstName: "Mila", lastName: "Nelson", email: "mila.nelson@fake.com", favoriteColor: "orange", birthday: "1994-04-01" },
    //     { firstName: "John", lastName: "Baker", email: "johnbaker@mock.co", favoriteColor: "black", birthday: "1990-12-16" },
    //     { firstName: "Aubrey", lastName: "Hall", email: "aubrey.h@testmail.com", favoriteColor: "pink", birthday: "1997-03-09" },
    //     { firstName: "David", lastName: "Rivera", email: "drivera@example.net", favoriteColor: "teal", birthday: "1985-07-23" },
    //     { firstName: "Hannah", lastName: "Campbell", email: "hannah.c@dummy.org", favoriteColor: "navy", birthday: "1992-11-04" },
    //     { firstName: "Wyatt", lastName: "Mitchell", email: "wyatt.mitchell@sample.com", favoriteColor: "maroon", birthday: "1988-02-26" },
    //     { firstName: "Layla", lastName: "Carter", email: "lcarter@fake.io", favoriteColor: "cyan", birthday: "1995-09-17" },
    //     { firstName: "Carter", lastName: "Roberts", email: "carter.r@mock.net", favoriteColor: "blue", birthday: "1999-01-31" },
    //     { firstName: "Ellie", lastName: "Gomez", email: "ellie.gomez@test.org", favoriteColor: "green", birthday: "1993-06-12" }
    // ];
    // const result = await Promise.all(
    //     dummyData.map(contact => contacts.insertData(contact))
    // );
    // res.status(200).json({ status: result })


}




module.exports = controller
