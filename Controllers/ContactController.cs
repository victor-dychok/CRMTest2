using CRMTest2.Core;
using CRMTest2.Core.Interfaces;
using CRMTest2.Models.Enities;
using CRMTest2.Views.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CRMTest2.Controllers
{
    public class ContactController : AppBaseController
    {

        private IContactRepository _ContactRepository;

        public ContactController(IContactRepository repository, ILogger<HomeController> logger) : base(logger)
        {
            _ContactRepository = repository;
        }

        public IActionResult Index()
        {
            /*_ContactRepository.Add(new Models.Enities.Contact { 
                Name = "Victor",
                MobilePhone = "80339108289",
                JobTitle = "C# .NET dev",
                BirthDate = new DateOnly(2011, 11, 1)
            });*/
            var contactsVM = new ContactsVM(_ContactRepository.GetAll().Result);
            return View(contactsVM);
        }

        [HttpPost]
        public IActionResult UpdateContact(Contact contact)
        {
            // Логика для обновления контакта в базе данных
            // Процесс сохранения обновленных данных
            // contact содержит обновленные данные
            return RedirectToAction("Index");
        }
    }
}
