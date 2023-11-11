using CRMTest2.Models.Enities;

namespace CRMTest2.Core.Interfaces
{
    public interface IContactRepository
    {
        Contact GetById(int id);
        List<Contact> GetAll();
        void Add(Contact contact);
        void Update(Contact contact);
        void Delete(Contact contact);
    }
}