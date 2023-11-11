using CRMTest2.Core;
using CRMTest2.Core.Interfaces;
using CRMTest2.Core.Repositories;
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
            /*_ContactRepository.Add(new Contact { 
                Name = "Alex",
                MobilePhone = "80294567890",
                JobTitle = "C++ dev",
                BirthDate = new DateOnly(2011, 11, 1)
            });*/
            var contactsVM = new ContactsVM(_ContactRepository.GetAll().Result);
            return View(contactsVM);
        }

        [HttpPost]
        public async Task<IActionResult> AddContact(Contact contact)
        {
            if (contact != null)
            {
                await _ContactRepository.Add(contact);
            }

            return  RedirectToAction("Index");
        }

        [HttpPost]
        public async Task<IActionResult> UpdateContact(Contact contact)
        {

            if (contact != null)
            {
                await _ContactRepository.Update(contact);
            }

            return RedirectToAction("Index");
        }

        [HttpPost]
        public async Task<IActionResult> DeleteContact(Contact contact)
        {
            if (contact != null)
            {
                await _ContactRepository.Delete(contact);
            }
            return RedirectToAction("Index");
        }

        public IActionResult GetContact(int id)
        {
            var task = _ContactRepository.GetById(id); // Получение контакта из хранилища по id
            var contact = task.Result;
            return Json(contact); // Возврат данных о контакте в формате JSON
        }
    }
}
