<?php

namespace App\DataFixtures;

use App\Entity\App;
use App\Entity\Scenario;
use App\Entity\SecretFormula;
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

        $scenario1 = new Scenario();
        $scenario1->setTitle('Guardians of the Galaxy Vol. 3');
        $scenario1->setExcerpt('Starlord will ...');
        $manager->persist($scenario1);

        $scenario2 = new Scenario();
        $scenario2->setTitle('Captain America - The Next Avenger');
        $scenario2->setExcerpt('After events of Avengers: Endgame, ...');
        $manager->persist($scenario2);

        $manager->flush();
    }
}
