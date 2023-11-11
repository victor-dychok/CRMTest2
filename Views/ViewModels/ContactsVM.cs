using CRMTest2.Models.Enities;

namespace CRMTest2.Views.ViewModels
{
    public class ContactsVM
    {
        public List<Contact> Contacts {  get; set; }
        public ContactsVM(List<Contact> contacts)
        {
            Contacts = contacts;
        }
    }
}
