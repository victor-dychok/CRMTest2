using CRMTest2.Models.Enities;

namespace CRMTest2.Core.Interfaces
{
    public interface IContactRepository
    {
        Task<Contact> GetById(int id);
        Task<List<Contact>> GetAll();
        Task Add(Contact contact);
        Task Update(Contact contact);
        Task Delete(Contact contact);
    }
}