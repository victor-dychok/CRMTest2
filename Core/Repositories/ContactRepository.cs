using CRMTest2.Core.Interfaces;
using CRMTest2.Models.Enities;

namespace CRMTest2.Core.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private readonly CRMAppContext _context;

        public ContactRepository(CRMAppContext context)
        {
            _context = context;
            _context.Database.EnsureCreated();
        }

        public Contact GetById(int id)
        {
            return _context.Set<Contact>().Find(id);
        }

        public List<Contact> GetAll()
        {
            return _context.Set<Contact>().ToList();
        }

        public void Add(Contact contact)
        {
            _context.Set<Contact>().Add(contact);
            _context.SaveChangesAsync();
        }

        public void Update(Contact contact)
        {
            _context.Set<Contact>().Update(contact);
            _context.SaveChangesAsync();
        }

        public void Delete(Contact contact)
        {
            _context.Set<Contact>().Remove(contact);
            _context.SaveChangesAsync();
        }
    }
}
