<?php

namespace App\DataFixtures;

use App\Entity\Scenario;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(
        private readonly UserPasswordHasherInterface $hasher,
    ) {}

    public function load(ObjectManager $manager): void
    {
        $admin = new User();
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setEmail('admin@example.com');
        $admin->setApiKeyProduction('admin-api-key-production');
        $admin->setApiKeyTest('admin-api-key-test');
        $password = $this->hasher->hashPassword($admin, 'password');
        $admin->setPassword($password);
        $manager->persist($admin);
        $manager->refresh($admin);

        $user = new User();
        $user->setRoles(['ROLE_API_CLIENT']);
        $user->setEmail('user@example.com');
        $user->setApiKeyProduction('user1-api-key-production');
        $user->setApiKeyTest('user1-api-key-test');
        $password = $this->hasher->hashPassword($user, 'password');
        $user->setPassword($password);
        $manager->persist($user);
        $manager->refresh($user);

        $johnDoe = new User();
        $johnDoe->setRoles(['ROLE_API_CLIENT']);
        $johnDoe->setEmail('johndoe@example.com');
        $johnDoe->setApiKeyProduction('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2OTgzMTE1NTZ9.E63DpD4PEThBcQmiSM-ckYuE4IpBlTEcyK0DfSS6WnQ');
        $johnDoe->setApiKeyTest('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2OTgzMTE1NTZ9.E63DpD4PEThBcQmiSM-ckYuE4IpBlTEcyK0DfSS6WnQ');
        $password = $this->hasher->hashPassword($johnDoe, 'password');
        $johnDoe->setPassword($password);
        $manager->persist($johnDoe);
        $manager->refresh($johnDoe);

        $scenario1 = new Scenario();
        $scenario1->setTitle('Guardians of the Galaxy Vol. 3');
        $scenario1->setExcerpt('Starlord will ...');
        $manager->persist($scenario1);

        $scenario2 = new Scenario();
        $scenario2->setTitle('Ant-Man And The Wasp: Quantumania');
        $scenario2->setExcerpt('Following on from Ant-Man and The Wasp, Scott and Hope van Dyne were confirmed ...');
        $manager->persist($scenario2);

        $scenario3 = new Scenario();
        $scenario3->setTitle('The Marvels');
        $scenario3->setExcerpt('THE Prequel continues ...');
        $manager->persist($scenario3);

        $scenario4 = new Scenario();
        $scenario4->setTitle('Captain America - New World Order');
        $scenario4->setExcerpt('After events of Falcon and the Winter Soldier, ...');
        $manager->persist($scenario4);

        $manager->flush();
    }
}
