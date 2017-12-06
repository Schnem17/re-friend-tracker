export class GuiModel {
    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    Key: Bei Listen-Daten kann ein Key mitgegeben werden. Wird kein Key mitgegeben, dann werden nach Klick
    des Zurück-Buttons die Elemente nicht mehr korrekt dargestellt.
    */
    private _guiModel = {
        "application": {
            "title": "Jennifer's Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
							"id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
},
                        {
                            "id": "group",
                            "type": "autocomplete",
							"name": "Group",
							"data": [ "Study", "Family", "School" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                                                                                  
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }, 
					{
                    "id": "ActivityForm",
                    "title": "Activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Activity name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                    {
                   		  	"id": "GroupForm",
                            "title": "Group",
                            "formFieldList": [
                            {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true,
                            },
                          {
                            "type": "deleteButton",
                            "name": "Delete"
                                                                                   },
						{
                            "type": "cancelButton",
                            "name": "Cancel"
                                  },
                     {
                                     "type": "okButton",
                                    "name": "Ok"
                 }
                                                                     ]
                                                       }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "green",
                            "page": "friendspage",
                        },
{
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-user",
                            "color": "lime",
                            "page": "activitypage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "teal",
                            "page": "locationspage",
                        },
                                                                                   {
                                                                                                "type": "button",
                                                                                                "name": "Groups",
                                                                                                "icon": "fa-gavel",
                                                                                                "color": "lime",
                                                                                                "page": "groupspage",
                                                                                   },
                    ]
                },
                                                       {
                                                                     "id": "groupspage",
                                                                     "elementList": [
                                                                                   {
                                                                                                "type": "backbutton",
                                                                                   },
                                                                                   {
                                                                                                "type": "newButton",
                                                                                                "name": "NewGroup",
                                                                                                "icon": "fa-fort-awesome",
                                                                                                "color": "teal",
                                                                                                "form": {
                                                                                                              "form": "GroupForm"
                                                                                                }
                                                                                   },
                                                                                                                                                                                                                                                                                                      
                                                                                   {
                                                                                                "type": "list",
                                                                                                "icon": "fa-asterisk",
                                                                                                "color": "alizarin",
                                                                                                "search": true,
                                                                                                "data": [ {name: "Study"}, {name: "Family"}, {name: "School"}],
                                                                                                "form": {
                                                                                                              "form": "GroupForm"
                                                                                                }
                                                                                   },
                                                                     ]
                                                       },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "lime",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],       
                                "page": "friendpage"  
                        },
                    ]
                },
                        {
                    "id": "friendpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "page": "friendpage"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "lime",
                            "search": true,
                            "data": [ { name: "Schwimmen" }, { name: "Joggen"} ],
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
{
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-user",
                            "color": "teal",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "lime",
                            "search": true,
                            "data": [ { name: "Schwimmen" }, { name: "Kino"} ],
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "teal",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                }
            ]
        }
    };
 
    get guiModel() {
        return this._guiModel;
    }
}​
